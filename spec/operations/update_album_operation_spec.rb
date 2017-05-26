# frozen_string_literal: true

require "rails_helper"

RSpec.describe UpdateAlbumOperation do
  describe "#run" do
    describe "update album" do
      before do
        RequestStore.store[:current_user] = create(:user)
      end

      subject(:updated_album) { described_class.new.run(input, album) }

      let(:album) { create(:album) }

      let(:input) do
        ActionController::Parameters.new(title:       "new album",
                                         description: "new album description",
                                         tag_list:    [{ "name" => "tag1" }, { "name" => "tag2" }, { "name" => "tag3" }])
      end

      it "valid object type" do
        expect(updated_album).to be_a(Album)
      end
      it "with new title" do
        expect(updated_album).to have_attributes(title: "new album")
      end
      it "with new description" do
        expect(updated_album).to have_attributes(description: "new album description")
      end
      it "with tags" do
        expect(updated_album).to have_attributes(tags: Tag.all)
      end
    end
  end
end
