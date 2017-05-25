# frozen_string_literal: true

class UpdateAlbumOperation < BaseOperation
  def initialize
    operation = Dry.Transaction(container: UpdateAlbumOperationContainer) do
      step :validate_resource
      step :get_tags
      step :update_album
    end
    schema = AlbumSchema

    super(operation, schema)
  end
end

class UpdateAlbumOperationContainer
  extend Dry::Container::Mixin
  merge BaseOperationContainer
  merge GetTagsOperationContainer

  register :update_album, (lambda do |input|
    params = { title:       input[:params]["title"],
               description: input[:params]["description"],
               tags:        input[:tags] }
    input[:resource].update(params)
    Dry::Monads.Right(resource: input[:resource])
  end)
end
