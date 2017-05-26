# frozen_string_literal: true

class CreateAlbumOperation < BaseOperation
  def initialize
    operation = Dry.Transaction(container: CreateAlbumOperationContainer) do
      step :validate_resource
      step :get_tags
      step :prepare_params
      step :create_resource
    end
    schema    = AlbumSchema

    super(operation, schema)
  end
end

class CreateAlbumOperationContainer
  extend Dry::Container::Mixin
  merge BaseOperationContainer
  merge GetTagsOperationContainer

  register :prepare_params, (lambda do |input|
    params = { title:       input[:params]["title"],
               description: input[:params]["description"],
               tags:        input[:tags],
               user:        RequestStore.store[:current_user] }
    Dry::Monads.Right(params: params, entity: Album)
  end)
end
