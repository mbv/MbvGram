# frozen_string_literal: true

class CreateCommentOperation < BaseOperation
  def initialize
    operation = Dry.Transaction(container: CreateCommentOperationContainer) do
      step :validate_resource
      step :prepare_params
      step :create_comment
      step :notify_users
    end
    schema    = CommentSchema

    super(operation, schema)
  end
end

class CreateCommentOperationContainer
  extend Dry::Container::Mixin
  merge BaseOperationContainer

  register :prepare_params, (lambda do |input|
    params = { text:     input[:params]["text"],
               photo_id: input[:params]["photo_id"],
               user:     RequestStore.store[:current_user] }
    Dry::Monads.Right(params: params, entity: Comment)
  end)

  register :notify_users, (lambda do |input|
    CommentRelayJob.perform_later(input[:resource]) unless input[:resource].new_record?
    Dry::Monads.Right(**input)
  end)
end
