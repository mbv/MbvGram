module Api
  class ApiController < ApplicationController
    respond_to :json
    include DeviseTokenAuth::Concerns::SetUserByToken
    before_action :configure_permitted_parameters, if: :devise_controller?

    protected
    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name])
    end
  end
end