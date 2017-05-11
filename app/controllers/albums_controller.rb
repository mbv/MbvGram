class AlbumsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_album, only: [:show, :update, :destroy]

  def index
    @albums = current_user.albums.includes([:taggings, :tags])
    render json: @albums
  end

  # GET /albums/1
  def show
    render json: @album
  end

  def create
    @album = Album.create(album_params)
    current_user.albums << @album

    if @album.save
      render json: @album, status: :created, location: @album
    else
      render json: @album.errors, status: :unprocessable_entity
    end
  end

  def update
    if @album.update(album_params)
      render json: @album
    else
      render json: @album.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @album.destroy
  end

  private
  def set_album
    @album = current_user.albums.find(params[:id])
  end

  def album_params
    params.permit(:title, :description, tag_list: [])
  end
end
