# frozen_string_literal: true

module Api
  class UsersController < ApiController
    def show
      authorize! :show, resource
      respond_with resource
    end

    def follow
      authorize! :follow, resource
      if resource.followers.any? { |user| user.id == current_user.id }
        render json: { errors: "Also follower" }
      else
        resource.followers << current_user
        render json: { message: "Followed" }
      end
    end

    def unfollow
      authorize! :unfollow, resource
      if resource.followers.none? { |user| user.id == current_user.id }
        render json: { errors: "not Followed" }
      else
        resource.followers.delete(current_user)
        render json: { message: "unfollowed" }
      end
    end

    private

    def resource
      @_resource ||= User.find(params[:id])
    end
  end
end
