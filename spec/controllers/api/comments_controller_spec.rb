# frozen_string_literal: true

require "rails_helper"

RSpec.describe Api::CommentsController, type: :controller do
  describe "#index" do
    let(:user) { create(:user) }
    let(:album) { create(:album, user: user) }
    let(:photo) { create(:photo, album: album) }
    let(:comment) { create(:comment, photo: photo) }

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

      it "show comment to own photo" do
        get :index, params: { album_id: album.id, photo_id: photo.id }, format: :json
        is_expected.to respond_with(200)
      end

      it "photo following user" do
        album.update_attributes(user: following_user)
        get :index, params: { album_id: album.id, photo_id: photo.id }, format: :json
        is_expected.to respond_with(200)
      end

      it "photo not following user" do
        album.update_attributes(user: another_user)
        expect do
          get :index, params: { album_id: album.id, photo_id: photo.id }, format: :json
        end.to raise_error(CanCan::AccessDenied)
      end
    end
    context "user not signed in" do
      it "need authorization" do
        get :index, params: { album_id: album.id, photo_id: photo.id }, format: :json

        is_expected.to respond_with(401)
      end
    end
  end

  describe "#create" do
    let(:user) { create(:user) }
    let(:album) { create(:album, user: user) }
    let(:photo) { create(:photo, album: album) }
    let(:comment) { create(:comment, photo: photo) }

    context "user signed in" do
      let(:following_user) do
        tmp_user = create(:user)
        user.following << tmp_user
        tmp_user
      end

      before do
        login_user_with_token user
      end

      it "new comment" do
        comment = { text: "text" }

        post :create, params: { album_id: album.id, photo_id: photo.id }, body: comment.to_json, as: :json, format: :json

        expect(assigns(:_resource)).to eq Comment.first
      end

      it "new comment to photo following user" do
        album.update_attributes(user: following_user)
        comment = { text: "text" }

        post :create, params: { album_id: album.id, photo_id: photo.id }, body: comment.to_json, as: :json, format: :json

        expect(assigns(:_resource)).to eq Comment.first
      end

    end
    context "user not signed in" do
      it "need authorization" do
        post :create, params: { album_id: album.id, photo_id: photo.id }, body: comment.to_json, format: :json

        is_expected.to respond_with(401)
      end
    end
  end
end