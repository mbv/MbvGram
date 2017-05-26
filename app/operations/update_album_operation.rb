# frozen_string_literal: true

class UpdateAlbumOperation < BaseOperation
  def initialize
    operation = Dry.Transaction(container: UpdateAlbumOperationContainer) do
      step :validate_resource
      step :get_tags
      step :prepare_params
      step :update_resource
    end
    schema = AlbumSchema

    super(operation, schema)
  end
end

class UpdateAlbumOperationContainer
  extend Dry::Container::Mixin
  merge BaseOperationContainer
  merge GetTagsOperationContainer

  register :prepare_params, (lambda do |input|
    params = { title:       input[:params]["title"],
               description: input[:params]["description"],
               tags:        input[:tags] }
    Dry::Monads.Right(params: params, resource: input[:resource])
  end)
end
