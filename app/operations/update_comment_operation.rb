# frozen_string_literal: true

class UpdateCommentOperation < BaseOperation
  def initialize
    operation = Dry.Transaction(container: UpdateCommentOperationContainer) do
      step :validate_resource
      step :prepare_params
      step :update_resource
    end
    schema    = PhotoSchema

    super(operation, schema)
  end
end

class UpdateCommentOperationContainer
  extend Dry::Container::Mixin
  merge BaseOperationContainer

  register :prepare_params, (lambda do |input|
    params = { text: input[:params]["text"] }
    Dry::Monads.Right(params: params, resource: input[:resource])
  end)
end
