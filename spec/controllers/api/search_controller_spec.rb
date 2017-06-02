# frozen_string_literal: true

require "rails_helper"

RSpec.describe Api::SearchController, type: :controller do
  describe "#index" do
    context "user signed in" do
      let(:user) { create(:user) }
      let(:album) { create(:album) }
      let(:photo) { create(:photo) }

      before do
        login_user_with_token user
      end

      it "return all entities" do
        get :index
        is_expected.to respond_with(200)
        expect(assigns(:result).response.results).to match_array([album, photo, user])
      end
    end
    context "user not signed in" do
      it "need authorization" do
        get :index

        is_expected.to respond_with(401)
      end
    end
  end
end