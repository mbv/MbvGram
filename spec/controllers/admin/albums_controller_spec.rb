# frozen_string_literal: true

require "rails_helper"

RSpec.describe Admin::AlbumsController, type: :controller do
  describe "GET index" do
    let(:user) { create(:user) }
    let(:album) { create(:album) }

    before do
      login_user user
    end

    it "assigns albums" do
      get :index
      expect(assigns(:albums)).to eq([album])
    end
  end
end
