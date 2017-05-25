# frozen_string_literal: true

class UpdatePhotoOperation < BaseOperation
  def initialize
    operation = Dry.Transaction(container: UpdatePhotoOperationContainer) do
      step :validate_resource
      step :get_tags
      step :update_photo
    end
    schema = PhotoSchema

    super(operation, schema)
  end
end

class UpdatePhotoOperationContainer
  extend Dry::Container::Mixin
  merge BaseOperationContainer
  merge GetTagsOperationContainer

  register :update_photo, (lambda do |input|
    params = { description: input[:params]["description"],
               album_id:    input[:params]["album_id"],
               tags:        input[:tags] }
    input[:resource].update(params)
    Dry::Monads.Right(resource: input[:resource])
  end)
end
