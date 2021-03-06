# frozen_string_literal: true

class UpdatePhotoOperation < BaseOperation
  def initialize
    operation = Dry.Transaction(container: UpdatePhotoOperationContainer) do
      step :validate_resource
      step :get_tags
      step :prepare_params
      step :update_resource
    end
    schema    = PhotoSchema

    super(operation, schema)
  end
end

class UpdatePhotoOperationContainer
  extend Dry::Container::Mixin
  merge BaseOperationContainer
  merge GetTagsOperationContainer

  register :prepare_params, (lambda do |input|
    params = { description: input[:params]["description"],
               album_id:    input[:params]["album_id"],
               tags:        input[:tags] }
    Dry::Monads.Right(params: params, resource: input[:resource])
  end)
end
