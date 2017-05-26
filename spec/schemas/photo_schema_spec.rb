# frozen_string_literal: true

require "rails_helper"

RSpec.describe PhotoSchema do
  describe "validation" do
    subject(:schema) { described_class }

    let(:album) { create(:album) }

    let(:valid_input) do
      { description: "photo description",
        album_id:    album.id,
        file:        "file",
        tag_list:    [{ name: "tag1" }, { name: "tag2" }, { name: "tag3" }] }
    end

    shared_examples "a valid" do |fields|
      it "be valid" do
        expect(schema.call(valid_input.merge(fields)).errors).to eq({})
      end
    end

    shared_examples "a invalid" do |fields|
      it "be invalid" do
        expect(schema.call(valid_input.merge(fields)).errors).to_not eq({})
      end
    end

    it_behaves_like "a valid", description: "sdasd"
    it_behaves_like "a valid", description: ""
    it_behaves_like "a valid", tag_list: []

    it_behaves_like "a invalid", file: ""
    it_behaves_like "a invalid", tag_list: [{ name: "" }]
    it_behaves_like "a invalid", tag_list: [{ name: "1" }]
    it_behaves_like "a invalid", tag_list: [{}]
    it_behaves_like "a invalid", album_id: 0
  end
end