class CreatePhotoOperation

  def initialize
    @operation = Dry.Transaction(container: CreatePhotoOperationContainer) do
      step :validate_photo
      step :get_tags
      step :create_photo
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

class CreatePhotoOperationContainer
  extend Dry::Container::Mixin

  register :validate_photo, (->(input) do
    #TODO fix
    input[:data]['tag_list'] = JSON.parse(input[:data]['tag_list'])
    validation_result = PhotoSchema.call(input[:data])
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

  register :create_photo, (->(input) do
    params = { description: input[:params]['description'],
               album_id:    input[:params]['album_id'],
               file:        input[:params]['file'],
               tags:        input[:tags] }
    photo  = Photo.create(params)
    Dry::Monads.Right(photo: photo)
  end)
end