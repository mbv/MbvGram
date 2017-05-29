# frozen_string_literal: true

require "rails_helper"

RSpec.describe Api::PhotosController, type: :controller do
  describe "#show" do
    context "user signed in" do
      let(:user) { create(:user) }
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
        album = create(:album, user: user)
        photo = create(:photo, album: album)
        get :show, params: { id: photo }, format: :json
        is_expected.to respond_with(200)
        expect(assigns(:_resource)).to eq photo
      end

      it "photo following user" do
        album = create(:album, user: following_user)
        photo = create(:photo, album: album)
        get :show, params: { id: photo }, format: :json
        is_expected.to respond_with(200)
        expect(assigns(:_resource)).to eq photo
      end

      it "photo not following user" do
        album = create(:album, user: another_user)
        photo = create(:photo, album: album)
        expect do
          get :show, params: { id: photo }, format: :json
        end.to raise_error(CanCan::AccessDenied)
      end
    end
    context "user not signed in" do
      it "need authorization" do
        photo = create(:photo)
        get :show, params: { id: photo }, format: :json

        is_expected.to respond_with(401)
      end
    end
  end

  describe "#create" do
    context "user signed in" do
      let(:user) { create(:user) }

      before do
        login_user_with_token user
      end

      it "new photo" do
        album = {description: "photo description",
                  tag_list:    [] }
        post :create, body: album.to_json, as: :json, format: :json

        expect(assigns(:_resource)).to eq album.to_json
      end

    end
    context "user not signed in" do
      it "need authorization" do
        album = create(:album)
        photo = { title:       "album title",
                  description: "album description",
                  tag_list:    [] }
        post :create, params: { album_id: album.id }, body: photo.to_json, format: :json

        is_expected.to respond_with(401)
      end
    end
  end
end