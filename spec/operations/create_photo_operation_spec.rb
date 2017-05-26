# frozen_string_literal: true

require "rails_helper"

RSpec.describe CreatePhotoOperation do
  describe "#run" do
    describe "create photo" do

      before do
        RequestStore.store[:current_user] = create(:user)
      end

      after do
        photo.file.remove!
      end

      subject(:photo) { described_class.new.run(input) }

      let(:album) { create(:album) }
      let(:input) do
        ActionController::Parameters.new(description: "photo description",
                                         album_id:    album.id,
                                         file:        File.open(Rails.root.join("spec", "fixtures", "files", "image.jpg")),
                                         tag_list:    [{ "name" => "tag1" },
                                                       { "name" => "tag2" },
                                                       { "name" => "tag3" }].to_json)
      end

      it "valid object type" do
        expect(photo).to be_a(Photo)
      end
      it "with description" do
        expect(photo).to have_attributes(description: "photo description")
      end
      it "with tags" do
        expect(photo).to have_attributes(tags: Tag.all)
      end
      it "with file" do
        expect(photo.file).to be_a(PhotoUploader)
      end
      it "file is uploaded" do
        expect(photo.file.file).to be_a(CarrierWave::SanitizedFile)
      end
    end
  end
end
