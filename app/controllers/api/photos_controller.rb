module Api
  class PhotosController < ApiController
    before_action :authenticate_user!

    def index
      respond_with Album.find(params[:album_id]).photos.includes([:taggings, :tags])
    end

    # GET /photos/1
    def show
      respond_with resource
    end

    def create
      photo = CreatePhotoOperation.new.get(params, current_user)
      album = Album.new
      respond_with :api, album, photo

    end

    def update
      photo = UpdatePhotoOperation.new.get(params, current_user)
      album = Album.new
      respond_with :api, album, photo
    end

    def destroy
      resource.destroy
    end

    private

    def resource
      @_resource ||= Photo.find(params[:id])
    end
  end
end
