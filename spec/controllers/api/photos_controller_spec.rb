# frozen_string_literal: true

require "rails_helper"

RSpec.describe Api::PhotosController, type: :controller do
  describe "#show" do
    let(:user) { create(:user) }
    let(:album) { create(:album, user: user) }
    let(:photo) { create(:photo, album: album) }

    context "user signed in" do
      let(:another_user) { create(:user) }
      let(:following_user) do
        tmp_user = create(:user)
        user.following << tmp_user
        tmp_user
      end

      before do
        login_user_with_token user
      end

      it "own photo" do
        get :show, params: { id: photo }, format: :json
        is_expected.to respond_with(200)
        expect(assigns(:_resource)).to eq photo
      end

      it "photo following user" do
        album.update_attributes(user: following_user)
        get :show, params: { id: photo }, format: :json
        is_expected.to respond_with(200)
        expect(assigns(:_resource)).to eq photo
      end

      it "photo not following user" do
        album.update_attributes(user: another_user)
        expect do
          get :show, params: { id: photo }, format: :json
        end.to raise_error(CanCan::AccessDenied)
      end
    end
    context "user not signed in" do
      it "need authorization" do
        get :show, params: { id: photo }, format: :json

        is_expected.to respond_with(401)
      end
    end
  end

  describe "#create" do
    let(:user) { create(:user) }
    let(:album) { create(:album, user: user) }

    context "user signed in" do
      before do
        login_user_with_token user
      end

      it "new photo" do
        photo = { description: "photo description",
                  album_id:    album.id,
                  file:        File.open(Rails.root.join("spec", "fixtures", "files", "image.jpg")),
                  tag_list:    [].to_json }
        post :create, params: photo, format: :json

        expect(assigns(:_resource)).to eq Photo.first
      end

    end

    context "user not signed in" do
      it "need authorization" do
        photo = { description: "photo description",
                  album_id:    album.id,
                  file:        File.open(Rails.root.join("spec", "fixtures", "files", "image.jpg")),
                  tag_list:    [].to_json }
        post :create, params: photo, format: :json

        is_expected.to respond_with(401)
      end
    end
  end

  describe "#update" do
    let(:user) { create(:user) }
    let(:album) { create(:album, user: user) }
    let(:photo) { create(:photo, album: album) }

    context "user signed in" do
      let(:another_user) { create(:user) }

      before do
        login_user_with_token user
      end

      it "update photo" do
        photo_hash = { description: "photo description",
                       album_id:    album.id,
                       file:        "url",
                       tag_list:    [] }
        put :update, params: { album_id: album.id, id: photo.id }, body: photo_hash.to_json, as: :json, format: :json

        expect(assigns(:_resource)).to have_attributes(description: photo_hash[:description])
      end

      it "can't update another's photo" do
        album.update_attributes(user: another_user)
        photo_hash = { description: "photo description",
                       album_id:    album.id,
                       file:        "url",
                       tag_list:    [] }
        expect do
          put :update, params: { album_id: album.id, id: photo.id }, body: photo_hash.to_json, as: :json, format: :json
        end.to raise_error(CanCan::AccessDenied)
      end


    end
    context "user not signed in" do
      it "need authorization" do
        photo_hash = { text: "text" }
        put :update, params: { album_id: album.id, id: photo.id }, body: photo_hash.to_json, format: :json

        is_expected.to respond_with(401)
      end
    end
  end

  describe "#destroy" do
    let(:user) { create(:user) }
    let(:album) { create(:album, user: user) }
    let(:photo) { create(:photo, album: album) }

    context "user signed in" do
      let(:another_user) { create(:user) }

      before do
        login_user_with_token user
      end

      it "destroy photo" do
        delete :destroy, params: { album_id: album.id, id: photo.id }, format: :json

        expect(Photo.any?).to eq(false)
      end
      it "can't destroy another's photo" do
        album.update_attributes(user: another_user)

        expect do
          delete :destroy, params: { album_id: album.id, id: photo.id }, format: :json
        end.to raise_error(CanCan::AccessDenied)
      end


    end
    context "user not signed in" do
      it "need authorization" do
        delete :destroy, params: { album_id: album.id, id: photo.id }, format: :json

        is_expected.to respond_with(401)
      end
    end
  end
end