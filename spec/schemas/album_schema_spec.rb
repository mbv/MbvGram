# frozen_string_literal: true

require "rails_helper"

RSpec.describe AlbumSchema do
  describe "validation" do
    subject(:schema) { described_class }

    let(:valid_input) do
      { title:       "album",
        description: "album description",
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

    it_behaves_like "a valid", title: "Tets"
    it_behaves_like "a valid", description: "sdasd"
    it_behaves_like "a valid", description: ""
    it_behaves_like "a valid", tag_list: []

    it_behaves_like "a invalid", title: ""
    it_behaves_like "a invalid", tag_list: [{ name: "" }]
    it_behaves_like "a invalid", tag_list: [{ name: "1" }]
    it_behaves_like "a invalid", tag_list: [{}]
  end
end