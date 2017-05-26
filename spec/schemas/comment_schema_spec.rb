# frozen_string_literal: true

require "rails_helper"

RSpec.describe CommentSchema do
  describe "validation" do
    let(:photo) { create(:photo) }

    let(:valid_input) do
      { text:     "comment text",
        photo_id: photo.id }
    end

    shared_examples "a valid" do |fields|
      subject(:schema) { described_class }

      it "be valid" do
        expect(schema.call(valid_input.merge(fields)).errors).to eq({})
      end
    end

    shared_examples "a invalid" do |fields|
      subject(:schema) { described_class }

      it "be invalid" do
        expect(schema.call(valid_input.merge(fields)).errors).to_not eq({})
      end
    end

    it_behaves_like "a valid", text: "a" * 140
    it_behaves_like "a valid", text: "asdasd"

    it_behaves_like "a invalid", text: ""
    it_behaves_like "a invalid", text: "a" * 141
    it_behaves_like "a invalid", photo_id: 0
  end
end