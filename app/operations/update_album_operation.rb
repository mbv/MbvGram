class UpdateAlbumOperation

  def initialize
    @operation = Dry.Transaction(container: UpdateAlbumOperationContainer) do
      step :validate_album
      step :find_album
      step :get_tags
      step :update_album
    end
  end

  def get(data, user)
    result = @operation.call(data: data, user: user)
    if result.right?
      result.value[:album]
    else
      result.value
    end
  end
end

class UpdateAlbumOperationContainer
  extend Dry::Container::Mixin

  register :validate_album, (->(input) do
    validation_result = AlbumUpdateSchema.call(input[:data])
    if validation_result.success?
      Dry::Monads.Right(params: validation_result.output, user: input[:user])
    else
      Dry::Monads.Left(validation_result)
    end
  end)

  register :find_album, (->(input) do
    album = Album.find(input[:params]['id'])
    Dry::Monads.Right(album: album, **input)
  end)

  register :get_tags, (->(input) do
    tags = input[:params]['tag_list'].map do |tag|
      Tag.where(name: tag['name']).first_or_create!
    end
    Dry::Monads.Right(tags: tags, **input)
  end)

  register :update_album, (->(input) do
    params = { title:       input[:params]['title'],
               description: input[:params]['description'],
               tags:        input[:tags] }
    album  = input[:album].update(params)
    Dry::Monads.Right(album: album)
  end)
end