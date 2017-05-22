module Api
  class AlbumsController < ApiController
    before_action :authenticate_user!

    def index
      respond_with current_user.albums.includes([:taggings, :tags, :photos])
    end

    def user_albums
      respond_with Album.where(user_id: params[:id]).all
                       .includes([:taggings, :tags, :photos])
    end

    # GET /albums/1
    def show
      respond_with resource
    end

    def create
      respond_with :api,
                   CreateAlbumOperation.new.get(params)
    end

    def update
      respond_with :api,
                   UpdateAlbumOperation.new.get(resource, params)
    end

    def destroy
      resource.destroy
    end

    private

    def resource
      @_resource ||= Album.find(params[:id])
    end
  end
end
