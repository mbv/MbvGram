module Api
  class ApiController < ApplicationController
    respond_to :json
    include DeviseTokenAuth::Concerns::SetUserByToken
  end
end