# frozen_string_literal: true

class CreatePhotoOperation < BaseOperation
  def initialize
    operation = Dry.Transaction(container: CreatePhotoOperationContainer) do
      step :prepare_data
      step :validate_resource
      step :get_tags
      step :create_photo
    end
    schema = PhotoSchema

    super(operation, schema)
  end
end

class CreatePhotoOperationContainer
  extend Dry::Container::Mixin
  merge BaseOperationContainer
  merge GetTagsOperationContainer

  register :prepare_data, (lambda do |input|
    #TODO| FIX
    input[:data]["tag_list"] = JSON.parse(input[:data]["tag_list"])
    Dry::Monads.Right(**input)
  end)

  register :create_photo, (lambda do |input|
    params = { description: input[:params]["description"],
               album_id:    input[:params]["album_id"],
               file:        input[:params]["file"],
               tags:        input[:tags] }
    photo  = Photo.create(params)
    Dry::Monads.Right(resource: photo)
  end)
end
