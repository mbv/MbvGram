class CreateAlbumOperation

  def initialize
    @operation = Dry.Transaction(container: CreateAlbumOperationContainer) do
      step :validate_album
      step :get_tags
      step :create_album
    end
  end

  def get(data)
    result = @operation.call(data: data)
    if result.right?
      result.value[:album]
    else
      result.value
    end
  end
end

class CreateAlbumOperationContainer
  extend Dry::Container::Mixin

  register :validate_album, (->(input) do
    validation_result = AlbumSchema.call(input[:data])
    if validation_result.success?
      Dry::Monads.Right(params: validation_result.output)
    else
      Dry::Monads.Left(validation_result)
    end
  end)

  register :get_tags, (->(input) do
    tags = input[:params]['tag_list'].map do |tag|
      Tag.where(name: tag['name']).first_or_create!
    end
    Dry::Monads.Right(tags: tags, **input)
  end)

  register :create_album, (->(input) do
    params       = { title:       input[:params]['title'],
                     description: input[:params]['description'],
                     tags:        input[:tags],
                     user:        RequestStore.store[:current_user] }
    album        = Album.create(params)
    Dry::Monads.Right(album: album)
  end)
end
