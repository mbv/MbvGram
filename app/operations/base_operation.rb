# frozen_string_literal: true

class BaseOperation
  def initialize(operation, schema)
    @operation = operation
    @schema = schema
  end

  def run(data, resource = nil)
    result = @operation.call(data: data, resource: resource, schema: @schema)
    if result.right?
      result.value[:resource]
    else
      result.value
    end
  end
end