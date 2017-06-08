# frozen_string_literal: true

require "rails_helper"

RSpec.describe Api::AlbumsController, type: :controller do
  describe "#user_albums" do
    let(:user) { create(:user) }
    let(:album) { create(:album, user: user) }

    context "user signed in" do
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

      it "show own albums" do
        get :user_albums, params: { id: user.id }, format: :json

        is_expected.to respond_with(200)
      end

      it "show following user albums" do
        get :user_albums, params: { id: following_user.id }, format: :json

        is_expected.to respond_with(200)
      end

      it "show albums not following user" do
        expect do
          get :user_albums, params: { id: another_user.id }, format: :json
        end.to raise_error(CanCan::AccessDenied)
      end
    end
    context "user not signed in" do
      it "need authorization" do
        get :user_albums, params: { id: user.id }, format: :json

        is_expected.to respond_with(401)
      end
    end

  end
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

      it "show own album" do
        get :show, params: { id: album }, format: :json
        is_expected.to respond_with(200)
        expect(assigns(:_resource)).to eq album
      end

      it "show album following user" do
        album.update_attributes(user: following_user)
        get :show, params: { id: album }, format: :json
        is_expected.to respond_with(200)
        expect(assigns(:_resource)).to eq album
      end

      it "show album not following user" do
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
      let(:user) { create(:user) }

      before do
        login_user_with_token user
      end

      it "create album" do
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

  describe "#update" do
    context "user signed in" do
      let(:user) { create(:user) }
      let(:another_user) { create(:user) }
      let(:album) { create(:album, user: user) }

      before do
        login_user_with_token user
      end

      it "update album" do
        album_hash = { title:       "album title",
                       description: "album description",
                       tag_list:    [] }
        put :update, params: { id: album.id }, body: album_hash.to_json, as: :json, format: :json

        expect(assigns(:_resource)).to have_attributes(title:       album_hash[:title],
                                                       description: album_hash[:description])
      end
      it "can't update another's album" do
        album.update_attributes(user: another_user)
        album_hash = { title:       "album title",
                       description: "album description",
                       tag_list:    [] }
        expect do
          put :update, params: { id: album.id }, body: album_hash.to_json, as: :json, format: :json
        end.to raise_error(CanCan::AccessDenied)
      end


    end
    context "user not signed in" do
      let(:album) { create(:album) }

      it "need authorization" do
        album_hash = { title:       "album title",
                       description: "album description",
                       tag_list:    [] }
        put :update, params: { id: album.id }, body: album_hash.to_json, format: :json

        is_expected.to respond_with(401)
      end
    end
  end
  describe "#destroy" do
    context "user signed in" do
      let(:user) { create(:user) }
      let(:another_user) { create(:user) }
      let(:album) { create(:album, user: user) }

      before do
        login_user_with_token user
      end

      it "destroy album" do
        delete :destroy, params: { id: album.id }, format: :json

        expect(Album.any?).to eq(false)
      end
      it "can't destroy another's album" do
        album.update_attributes(user: another_user)

        expect do
          delete :destroy, params: { id: album.id }, format: :json
        end.to raise_error(CanCan::AccessDenied)
      end


    end
    context "user not signed in" do
      let(:album) { create(:album) }

      it "need authorization" do
        delete :destroy, params: { id: album.id }, format: :json

        is_expected.to respond_with(401)
      end
    end
  end
end