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
      photo = CreatePhotoOperation.new.get(params, current_user)
      respond_with :api, album, photo

    end

    def update
      photo = UpdatePhotoOperation.new.get(params, current_user)
      respond_with :api, album, photo
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
