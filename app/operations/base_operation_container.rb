# frozen_string_literal: true

class BaseOperationContainer
  extend Dry::Container::Mixin

  register :validate_resource, (lambda do |input|
    validation_result = input[:schema].call(input[:data])
    if validation_result.success?
      Dry::Monads.Right(params: validation_result.output, resource: input[:resource])
    else
      Dry::Monads.Left(validation_result)
    end
  end)
end