# frozen_string_literal: true

require "rails_helper"

RSpec.describe BaseOperationContainer do
  describe "#validate_resource" do
    class FakeSchema
      def call(input)
        FakeValidationResult.new(input)
      end
    end

    class FakeValidationResult
      def initialize(result)
        @result = result
      end

      def success?
        @result
      end

      def output
        nil
      end
    end

    let(:valid_input) { { schema: FakeSchema.new, data: true } }
    let(:invalid_input) { { schema: FakeSchema.new, data: false } }

    validation_resource_step = described_class.resolve(:validate_resource)

    it "when invalid input" do
      expect(validation_resource_step.call(invalid_input)).to be_a(Dry::Monads::Either::Left)
    end
    it "when valid input" do
      expect(validation_resource_step.call(valid_input)).to be_a(Dry::Monads::Either::Right)
    end
  end
end