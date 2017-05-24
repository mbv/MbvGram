module Api
  class UsersController < ApiController
    load_and_authorize_resource

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

    def unfollow
      if resource.followers.none? { |user| user.id == current_user.id }
        render json: { errors: 'not Followed' }
      else
        resource.followers.delete(current_user)
        render json: { errors: 'unfollowed' }
      end

    end

    private

    def resource
      @_resource ||= User.find(params[:id])
    end
  end
end
