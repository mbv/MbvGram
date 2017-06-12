# frozen_string_literal: true

module ControllerMacros
  def login_admin
    each do
      @request.env["devise.mapping"] = Devise.mappings[:admin]
      admin                          = FactoryGirl.create(:admin)
      sign_in admin, :user
    end
  end

  def login_user(user)
    user ||= create(:user)
    @request.env["devise.mapping"] = Devise.mappings[:user]
    user.confirm
    sign_in user
  end


  def login_user_with_token(user)
    @request.env["devise.mapping"] = Devise.mappings[:user]
    @request.headers.merge! user.create_new_auth_token
    sign_in user
  end
end
