# frozen_string_literal: true

class GetTagsOperationContainer
  extend Dry::Container::Mixin

  register :get_tags, (lambda do |input|
    tags = input[:params]["tag_list"].map do |tag|
      Tag.where(name: tag["name"]).first_or_create!
    end
    Dry::Monads.Right(tags: tags, **input)
  end)
end