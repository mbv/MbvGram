# frozen_string_literal: true

module Api
  class ApiController < ApplicationController
    respond_to :json
    include DeviseTokenAuth::Concerns::SetUserByToken
    protect_from_forgery
    before_action :authenticate_user!
    before_action :set_current_user_to_scope

    protected

    def set_current_user_to_scope
      RequestStore.store[:current_user] = current_user
    end
  end
end
