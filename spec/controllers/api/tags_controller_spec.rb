# frozen_string_literal: true

require "rails_helper"

RSpec.describe Api::TagsController, type: :controller do
  describe "#index" do
    context "user signed in" do
      let(:user) { create(:user) }

      before do
        login_user_with_token user
      end

      it "show own albums" do
        get :index, format: :json

        is_expected.to respond_with(200)
      end
    end
    context "user not signed in" do
      it "need authorization" do
        get :index, format: :json

        is_expected.to respond_with(401)
      end
    end
  end
end