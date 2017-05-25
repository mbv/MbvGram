# frozen_string_literal: true

require "rails_helper"

RSpec.describe CreateAlbumOperation do
  describe "#run" do
    describe "create album" do

      before do
        RequestStore.store[:current_user] = create(:user)
      end

      subject(:album) { described_class.new.run(input) }

      let(:input) do
        ActionController::Parameters.new(title:       "album",
                                         description: "album description",
                                         tag_list:    [{ "name" => "tag1" }, { "name" => "tag2" }, { "name" => "tag3" }])
      end

      it "valid object type" do
        expect(album).to be_a(Album)
      end
      it "with title" do
        expect(album).to have_attributes(title: "album")
      end
      it "with description" do
        expect(album).to have_attributes(description: "album description")
      end
      it "with tags" do
        expect(album).to have_attributes(tags: Tag.all)
      end
    end
  end
end
