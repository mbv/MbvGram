# frozen_string_literal: true

require "rails_helper"

RSpec.describe Admin::CommentsController, type: :controller do
  describe "GET index" do
    let(:user) { create(:user) }
    let(:comment) { create(:comment) }

    before do
      login_user user
    end

    it "assigns comments" do
      get :index
      expect(assigns(:comments)).to eq([comment])
    end
  end
end
