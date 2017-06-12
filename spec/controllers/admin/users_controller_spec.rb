# frozen_string_literal: true

require "rails_helper"

RSpec.describe Admin::UsersController, type: :controller do
  describe "GET index" do
    let(:user) { create(:user) }

    before do
      login_user user
    end

    it "assigns users" do
      get :index
      expect(assigns(:users)).to eq([user])
    end
  end
end
