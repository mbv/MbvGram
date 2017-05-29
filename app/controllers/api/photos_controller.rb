# frozen_string_literal: true

module Api
  class PhotosController < ApiController
    load_and_authorize_resource

    def index
      respond_with @_resources = album.photos.includes([:taggings, :tags])
    end

    def feed
      respond_with @_resources = Photo.joins(:album).where(albums: { user: current_user.following })
                       .order(created_at: :desc).all.includes([:taggings, :tags, album: :user])
    end

    def show
      authorize! :show, resource
      respond_with resource
    end

    def create
      authorize! :add_photo, album
      respond_with :api, album, CreatePhotoOperation.new.run(params)
    end

    def update
      authorize! :update, resource
      respond_with :api, album, UpdatePhotoOperation.new.run(params, resource)
    end

    def destroy
      authorize! :destroy, resource
      resource.destroy
    end

    private

    def album
      @_album ||= Album.find(params[:album_id])
    end

    def resource
      @_resource ||= Photo.find(params[:id])
    end
  end
end
