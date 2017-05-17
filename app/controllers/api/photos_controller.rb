module Api
  class PhotosController < ApiController
    before_action :authenticate_user!
    before_action :set_photo, only: [:show, :update, :destroy]

    def index
      @photos = Album.find(params[:album_id]).photos.includes([:taggings, :tags])
      render json: @photos
    end

    # GET /photos/1
    def show
      respond_with resource
    end

    def create
      @photo = Photo.create(photo_params)
      Album.find(params[:album_id]).photos << @photo

      if @photo.save
        render json: @photo, status: :created, location: [:api, @photo.album, @photo]
      else
        render json: @photo.errors, status: :unprocessable_entity
      end
    end

    def update
      if resource.update(photo_params)
        render json: @photo
      else
        render json: @photo.errors, status: :unprocessable_entity
      end
    end

    def destroy
      @photo.destroy
    end

    private

    def resource
      @_resource ||= Photo.find(params[:id])
    end

    def set_photo
      @photo = Photo.find(params[:id])
    end

    def photo_params
      params.permit(:file, :album_id, :description, :tag_list)
    end
  end
end
