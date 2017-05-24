# frozen_string_literal: true

class UpdateAlbumOperation
  def initialize
    @operation = Dry.Transaction(container: UpdateAlbumOperationContainer) do
      step :validate_album
      step :get_tags
      step :update_album
    end
  end

  def get(resource, data)
    result = @operation.call(data: data, album: resource)
    if result.right?
      result.value[:album]
    else
      result.value
    end
  end
end

class UpdateAlbumOperationContainer
  extend Dry::Container::Mixin

  register :validate_album, lambda do |input|
    validation_result = AlbumSchema.call(input[:data])
    if validation_result.success?
      Dry::Monads.Right(params: validation_result.output, album: input[:album])
    else
      Dry::Monads.Left(validation_result)
    end
  end

  register :get_tags, lambda do |input|
    tags = input[:params]["tag_list"].map do |tag|
      Tag.where(name: tag["name"]).first_or_create!
    end
    Dry::Monads.Right(tags: tags, **input)
  end

  register :update_album, lambda do |input|
    params = { title:       input[:params]["title"],
               description: input[:params]["description"],
               tags:        input[:tags] }
    input[:album].update(params)
    Dry::Monads.Right(album: input[:album])
  end
end
