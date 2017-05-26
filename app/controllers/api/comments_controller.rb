# frozen_string_literal: true

module Api
  class CommentsController < ApiController

    def index
      respond_with Photo.find(params[:photo_id]).comments.includes(:user).order(created_at: :desc)
    end

    def create
      authorize! :add_comment, photo
      respond_with :api, photo.album, photo, CreateCommentOperation.new.run(params)
    end

    def update
      authorize! :update, resource
      respond_with :api, photo.album, photo, UpdateCommentOperation.new.run(params, resource)
    end

    def destroy
      authorize! :destroy, resource
      resource.destroy
    end

    private

    def photo
      @_photo ||= Photo.find(params[:photo_id])
    end

    def resource
      @_resource ||= Comment.find(params[:id])
    end
  end
end
