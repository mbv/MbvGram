module Api
  class AlbumsController < ApiController
    before_action :authenticate_user!

    def index
      respond_with current_user.albums.includes([:taggings, :tags])
    end

    # GET /albums/1
    def show
      respond_with resource
    end

    def create
      respond_with :api,
                   CreateAlbumOperation.new.get(params, current_user)
    end

    def update
      respond_with :api,
                   UpdateAlbumOperation.new.get(params, current_user)
    end

    def destroy
      resource.destroy
    end

    private

    def resource
      @_resource ||= current_user.albums.find(params[:id])
    end
  end
end
