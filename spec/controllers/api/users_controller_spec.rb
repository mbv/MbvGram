# frozen_string_literal: true

require "rails_helper"

RSpec.describe Api::UsersController, type: :controller do
  describe "#show" do
    let(:user) { create(:user) }

    context "user signed in" do
      let(:another_user) { create(:user) }

      before do
        login_user_with_token user
      end

      it "show own profile" do
        get :show, params: { id: user }, format: :json
        is_expected.to respond_with(200)
        expect(assigns(:_resource)).to eq user
      end

      it "show another user" do
        get :show, params: { id: another_user }, format: :json
        is_expected.to respond_with(200)
        expect(assigns(:_resource)).to eq another_user
      end
    end
    context "user not signed in" do
      it "need authorization" do
        get :show, params: { id: user }, format: :json

        is_expected.to respond_with(401)
      end
    end
  end

  describe "#follow" do
    let(:user) { create(:user) }

    context "user signed in" do
      let(:another_user) { create(:user) }

      before do
        login_user_with_token user
      end

      it "show own profile" do
        get :show, params: { id: user }, format: :json
        is_expected.to respond_with(200)
        expect(assigns(:_resource)).to eq user
      end

      it "show another user" do
        get :show, params: { id: another_user }, format: :json
        is_expected.to respond_with(200)
        expect(assigns(:_resource)).to eq another_user
      end
    end
    context "user not signed in" do
      it "need authorization" do
        get :show, params: { id: user }, format: :json

        is_expected.to respond_with(401)
      end
    end
  end

end