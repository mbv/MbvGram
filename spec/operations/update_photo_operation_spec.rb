# frozen_string_literal: true

require "rails_helper"

RSpec.describe UpdatePhotoOperation do
  describe "#run" do
    describe "update photo" do
      before do
        RequestStore.store[:current_user] = create(:user)
      end

      subject(:updated_photo) { described_class.new.run(input, photo) }

      let(:photo) { create(:photo) }

      let(:album) { create(:album) }

      let(:input) do
        ActionController::Parameters.new(description: "new photo description",
                                         album_id:    album.id,
                                         file:        photo.file,
                                         tag_list:    [{ "name" => "tag1" }, { "name" => "tag2" }, { "name" => "tag3" }])
      end

      it "valid object type" do
        expect(updated_photo).to be_a(Photo)
      end
      it "with new album" do
        expect(updated_photo.album).to eq(album)
      end
      it "with new description" do
        expect(updated_photo).to have_attributes(description: "new photo description")
      end
      it "with tags" do
        expect(updated_photo).to have_attributes(tags: Tag.all)
      end
    end
  end
end
