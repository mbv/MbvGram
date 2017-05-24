# frozen_string_literal: true

module Api
  class PhotosController < ApiController
    load_and_authorize_resource

    def index
      respond_with album.photos.includes([:taggings, :tags])
    end

    def feed
      respond_with Photo.joins(:album).where(albums: { user: current_user.following })
                       .order(created_at: :desc).all.includes([:taggings, :tags, album: :user])
    end

    def show
      respond_with resource
    end

    def create
      respond_with :api, album, CreatePhotoOperation.new.get(params)

    end

    def update
      respond_with :api, album, UpdatePhotoOperation.new.get(resource, params)
    end

    def destroy
      resource.destroy
    end

    private

    def album
      @album ||= Album.find(params[:album_id])
    end

    def resource
      @_resource ||= Photo.find(params[:id])
    end
  end
end
