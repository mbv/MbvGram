# frozen_string_literal: true

require "rails_helper"

RSpec.describe GetTagsOperationContainer do
  describe "#get_tags" do
    let(:input) { { params: { "tag_list" => [{ "name" => "tag1" }, { "name" => "tag2" }, { "name" => "tag3" }] } } }
    let(:empty_input) { { params: { "tag_list" => [] } } }

    get_tags_step = CreateAlbumOperationContainer.resolve(:get_tags)

    it "return tag existing objects" do
      tags = [Tag.create!(name: "tag1"), Tag.create!(name: "tag2"), Tag.create!(name: "tag3")]
      expect(get_tags_step.call(input).value[:tags]).to match_array(tags)
    end

    it "empty tag list" do
      expect(get_tags_step.call(empty_input).value[:tags]).to match_array([])
    end

    it "create tag objects" do
      expect(get_tags_step.call(input).value[:tags]).to match_array(Tag.all)
    end

  end
end
