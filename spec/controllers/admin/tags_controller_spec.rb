# frozen_string_literal: true

require "rails_helper"

RSpec.describe Admin::TagsController, type: :controller do
  describe "GET index" do
    let(:user) { create(:user) }
    let(:tag) { create(:tag) }

    before do
      login_user user
    end

    it "assigns tags" do
      get :index
      expect(assigns(:tags)).to eq([tag])
    end
  end
end
