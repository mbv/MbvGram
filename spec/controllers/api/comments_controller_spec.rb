# frozen_string_literal: true

require "rails_helper"

RSpec.describe Api::CommentsController, type: :controller do
  describe "#index" do
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
        album   = create(:album, user: user)
        photo   = create(:photo, album: album)
        comment = create(:comment, photo: photo)
        get :index, params: { album_id: album.id, photo_id: photo.id }, format: :json
        is_expected.to respond_with(200)
        expect(assigns(:_resources)).to match_array([comment])
      end

      it "photo following user" do
        album   = create(:album, user: following_user)
        photo   = create(:photo, album: album)
        comment = create(:comment, photo: photo)
        get :index, params: { album_id: album.id, photo_id: photo.id }, format: :json
        is_expected.to respond_with(200)
        expect(assigns(:_resources)).to match_array([comment])
      end

      it "photo not following user" do
        album = create(:album, user: another_user)
        photo = create(:photo, album: album)
        create(:comment, photo: photo)
        expect do
          get :index, params: { album_id: album.id, photo_id: photo.id }, format: :json
        end.to raise_error(CanCan::AccessDenied)
      end
    end
    context "user not signed in" do
      it "need authorization" do
        album = create(:album)
        photo = create(:photo, album: album)
        create(:comment, photo: photo)
        get :index, params: { album_id: album.id, photo_id: photo.id }, format: :json

        is_expected.to respond_with(401)
      end
    end
  end

  describe "#create" do
    context "user signed in" do

      it "new comment" do
        user           = create(:user)
        login_user_with_token user

        comment = { text: "text" }
        album   = create(:album, user: user)
        photo   = create(:photo, album: album)

        post :create, params: { album_id: album.id, photo_id: photo.id }, body: comment.to_json, as: :json, format: :json

        expect(assigns(:_resource)).to eq Comment.first
      end

      it "new comment to photo following user" do
        user           = create(:user)
        following_user = create(:user)
        user.following << following_user
        login_user_with_token user

        comment = { text: "text" }
        album   = create(:album, user: following_user)
        photo   = create(:photo, album: album)

        post :create, params: { album_id: album.id, photo_id: photo.id }, body: comment.to_json, as: :json, format: :json

        expect(assigns(:_resource)).to eq Comment.first
      end

    end
    context "user not signed in" do
      it "need authorization" do
        comment = { text: "text" }
        album   = create(:album)
        photo   = create(:photo, album: album)
        post :create, params: { album_id: album.id, photo_id: photo.id }, body: comment.to_json, format: :json

        is_expected.to respond_with(401)
      end
    end
  end
end