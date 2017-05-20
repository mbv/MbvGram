module Api
  class PhotosController < ApiController
    before_action :authenticate_user!

    def index
      respond_with album.photos.includes([:taggings, :tags])
    end

    # GET /photos/1
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
