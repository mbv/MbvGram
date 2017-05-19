module Api
  class UsersController < ApiController
    def show
      respond_with resource
    end

    private

    def resource
      @_resource ||= User.find(params[:id])
    end
  end
end
