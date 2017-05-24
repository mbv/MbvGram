# frozen_string_literal: true

module Api
  class CommentsController < ApiController
    load_and_authorize_resource

    def index
      respond_with Photo.find(params[:photo_id]).comments.includes(:user).order(created_at: :desc)
    end

    def show
      respond_with resource
    end

    def create
      @comment = Comment.create(comment_params)
      Photo.find(params[:photo_id]).comments << @comment

      if @comment.save
        CommentRelayJob.perform_later(@comment)
        render json: @comment, status: :created, location: [:api, @comment.photo.album, @comment.photo, @comment]
      else
        render json: @comment.errors, status: :unprocessable_entity
      end
    end

    def update
      respond_with resource.update(comment_params)
    end

    def destroy
      resource.destroy
    end

    private

    def resource
      @_resource ||= Album.find(params[:id])
    end

    def comment_params
      params.permit(:user_id, :photo, :text)
    end
  end
end
