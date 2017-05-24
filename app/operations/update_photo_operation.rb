# frozen_string_literal: true

class UpdatePhotoOperation
  def initialize
    @operation = Dry.Transaction(container: UpdatePhotoOperationContainer) do
      step :validate_photo
      step :get_tags
      step :update_photo
    end
  end

  def get(resource, data)
    result = @operation.call(data: data, photo: resource)
    if result.right?
      result.value[:photo]
    else
      result.value
    end
  end
end

class UpdatePhotoOperationContainer
  extend Dry::Container::Mixin

  register :validate_photo, lambda do |input|
    validation_result = PhotoSchema.call(input[:data])
    if validation_result.success?
      Dry::Monads.Right(params: validation_result.output, photo: input[:photo])
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

  register :update_photo, lambda do |input|
    params = { description: input[:params]["description"],
               album_id:    input[:params]["album_id"],
               tags:        input[:tags] }
    input[:photo].update(params)
    Dry::Monads.Right(photo: input[:photo])
  end
end
