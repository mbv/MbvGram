# frozen_string_literal: true

require "rails_helper"

RSpec.describe Api::AlbumsController, type: :controller do
  describe "#index" do
    context "user signed in" do
      let(:user) { create(:user) }

      before do
        login_user_with_token user
      end

      it "responds successfully with an HTTP 200 status code" do
        album = create(:album, user: user)
        get :show, params: { id: album }, format: :json
        is_expected.to respond_with(200)
      end

      it "loads all of the posts into @posts" do
        album1 = create(:album)
        album2 = create(:album)
        get :index

        expect(assigns(:albums)).to match_array([album1, album2])
      end
    end
    context "user not signed in" do
      it "responds with an HTTP 401 status code" do
        album = create(:album)
        get :show, params: { id: album }

        is_expected.to respond_with(401)
      end
    end
  end
  describe "GET #show" do
    it "assigns the requested album to @album" do
      album = create(:album)
      get :show, params: { id: album }
      is_expected.to respond_with(200)
      expect(assigns(:album)).to eq album
    end
    it "renders the :show template"
  end
end
