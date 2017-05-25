# frozen_string_literal: true

require "rails_helper"

RSpec.describe BaseOperation do
  describe "#get" do
    class FakeContainer
      def call(input)
        input[:data]
      end
    end
    let(:base_operation) { described_class.new(FakeContainer.new, nil) }

    it "return value when left monad" do
      expect(base_operation.run(Dry::Monads.Right(resource: "value"))).to eq("value")
    end
    it "return resource when right monad" do
      expect(base_operation.run(Dry::Monads.Left("errors"))).to eq("errors")
    end
  end
end