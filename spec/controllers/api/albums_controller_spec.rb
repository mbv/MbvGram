# frozen_string_literal: true

require "rails_helper"

RSpec.describe Api::AlbumsController, type: :controller do
  describe "#show" do
    context "user signed in" do
      let(:user) { create(:user) }
      let(:another_user) { create(:user) }
      let(:following_user) do
        tmp_user = create(:user)
        user.following << tmp_user
        tmp_user
      end
      let(:album) { create(:album, user: user) }

      before do
        login_user_with_token user
      end

      it "own album" do
        get :show, params: { id: album }, format: :json
        is_expected.to respond_with(200)
        expect(assigns(:_resource)).to eq album
      end

      it "album following user" do
        album.update_attributes(user: following_user)
        get :show, params: { id: album }, format: :json
        is_expected.to respond_with(200)
        expect(assigns(:_resource)).to eq album
      end

      it "album not following user" do
        album.update_attributes(user: another_user)
        expect do
          get :show, params: { id: album }, format: :json
        end.to raise_error(CanCan::AccessDenied)
      end
    end
    context "user not signed in" do
      it "need authorization" do
        album = create(:album)
        get :show, params: { id: album }, format: :json

        is_expected.to respond_with(401)
      end
    end
  end

  describe "#create" do
    context "user signed in" do
      let(:user) { create(:user, id: 150) }

      before do
        login_user_with_token user
      end

      it "new album" do
        album = { title:       "album title",
                  description: "album description",
                  tag_list:    [] }
        post :create, body: album.to_json, as: :json, format: :json

        expect(assigns(:_resource)).to eq Album.first
      end

    end
    context "user not signed in" do
      it "need authorization" do
        album = { title:       "album title",
                  description: "album description",
                  tag_list:    [] }
        post :create, body: album.to_json, format: :json

        is_expected.to respond_with(401)
      end
    end
  end
end