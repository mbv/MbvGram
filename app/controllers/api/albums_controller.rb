# frozen_string_literal: true

module Api
  class AlbumsController < ApiController
    def user_albums
      user = User.find(params[:id])
      authorize! :show_content, user
      respond_with Album.where(user: user).all
                                 .includes(%i[taggings tags photos])
    end

    def show
      authorize! :show, resource
      respond_with @album = resource
    end

    def create
      authorize! :create, Album
      respond_with :api, CreateAlbumOperation.new.run(params)
    end

    def update
      authorize! :update, resource
      respond_with :api, UpdateAlbumOperation.new.run(params, resource)
    end

    def destroy
      authorize! :destroy, resource
      resource.destroy
    end

    private

    def resource
      @_resource ||= Album.find(params[:id])
    end
  end
end
