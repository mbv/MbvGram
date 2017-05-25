# frozen_string_literal: true

class CreateAlbumOperation < BaseOperation
  def initialize
    operation = Dry.Transaction(container: CreateAlbumOperationContainer) do
      step :validate_resource
      step :get_tags
      step :create_album
    end
    schema = AlbumSchema

    super(operation, schema)
  end
end

class CreateAlbumOperationContainer
  extend Dry::Container::Mixin
  merge BaseOperationContainer
  merge GetTagsOperationContainer

  register :create_album, (lambda do |input|
    params       = { title:       input[:params]["title"],
                     description: input[:params]["description"],
                     tags:        input[:tags],
                     user:        RequestStore.store[:current_user] }
    album        = Album.create(params)
    Dry::Monads.Right(resource: album)
  end)
end
