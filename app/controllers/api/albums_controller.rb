# frozen_string_literal: true

module Api
  class AlbumsController < ApiController
    load_and_authorize_resource except: :user_albums

    def user_albums
      user = User.find(params[:id])
      authorize! :show_content, user
      respond_with Album.where(user: user).all
                                 .includes(%i[taggings tags photos])
    end

    def show
      respond_with @album = resource
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
