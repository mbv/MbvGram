module Api
  class UsersController < ApiController
    def show
      respond_with resource
    end

    def follow
      if resource.followers.any? { |user| user.id == current_user.id }
        render json: { errors: 'Also follower' }
      else
        resource.followers << current_user
        render json: { errors: 'Followed' }
      end

    end

    private

    def resource
      @_resource ||= User.find(params[:id])
    end
  end
end
