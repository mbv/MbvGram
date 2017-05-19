class UpdatePhotoOperation

  def initialize
    @operation = Dry.Transaction(container: UpdatePhotoOperationContainer) do
      step :validate_photo
      step :find_photo
      step :get_tags
      step :update_photo
    end
  end

  def get(data, user)
    result = @operation.call(data: data, user: user)
    if result.right?
      result.value[:photo]
    else
      result.value
    end
  end
end

class UpdatePhotoOperationContainer
  extend Dry::Container::Mixin

  register :validate_photo, (->(input) do
    validation_result = PhotoUpdateSchema.call(input[:data])
    if validation_result.success?
      Dry::Monads.Right(params: validation_result.output)
    else
      Dry::Monads.Left(validation_result)
    end
  end)

  register :find_photo, (->(input) do
    photo = Photo.find(input[:params]['id'])
    Dry::Monads.Right(photo: photo, **input)
  end)

  register :get_tags, (->(input) do
    tags = input[:params]['tag_list'].map do |tag|
      Tag.where(name: tag['name']).first_or_create!
    end
    Dry::Monads.Right(tags: tags, **input)
  end)

  register :update_photo, (->(input) do
    params = { description: input[:params]['description'],
               album_id:    input[:params]['album_id'],
               tags:        input[:tags] }
    photo  = input[:photo].update(params)
    Dry::Monads.Right(photo: photo)
  end)
end
