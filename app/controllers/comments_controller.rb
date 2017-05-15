class CommentsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_comment, only: [:show, :update, :destroy]

  def index
    @comments = Photo.find(params[:photo_id]).comments.order(created_at: :desc)
    render json: @comments
  end

  # GET /comments/1
  def show
    render json: @comment
  end

  def create
    @comment = Comment.create(comment_params)
    Photo.find(params[:photo_id]).comments << @comment

    if @comment.save
      render json: @comment, status: :created, location: [@comment.photo.album, @comment.photo, @comment]
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @comment.destroy
  end

  private
  def set_comment
    @comment = Comment.find(params[:id])
  end

  def comment_params
    params.permit(:user_id, :photo, :text)
  end
end
