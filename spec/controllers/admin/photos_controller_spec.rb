# frozen_string_literal: true

require "rails_helper"

RSpec.describe Admin::PhotosController, type: :controller do
  describe "GET index" do
    let(:user) { create(:user) }
    let(:photo) { create(:photo) }

    before do
      login_user user
    end

    it "assigns photos" do
      get :index
      expect(assigns(:photos)).to eq([photo])
    end
  end
end
