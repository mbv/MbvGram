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
      respond_with :api, CreatePhotoOperation.new.get(params, current_user)

    end

    def update
      if resource.update(photo_params)
        render json: @photo
      else
        render json: @photo.errors, status: :unprocessable_entity
      end
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
