module Api
  class AlbumsController < ApiController
    before_action :authenticate_user!

    attr_reader :validation_result

    def index
      respond_with current_user.albums.includes([:taggings, :tags])
    end

    # GET /albums/1
    def show
      respond_with resource
    end

    def create

      tag_schema          = Dry::Validation.Schema do
        required(:name)
      end
      create_album_schema = Dry::Validation.Schema do
        required(:title).filled(:str?)
        required(:description).maybe(:str?)
        required(:tag_list).each do
           required(:name)
        end
      end

      @validation_result = create_album_schema.call(params)
      unless @validation_result.success?
        return render json:   @validation_result.errors.to_json,
                      status: :unprocessable_entity
      end

      result = @validation_result.output


      @album = Album.create(result.permit(:title, :description, tag_list: [:name]))
      current_user.albums << @album

      respond_with @album, location: [:api, @album]
    end

    def update
      respond_with resource.update(album_params)
    end

    def destroy
      @album.destroy
    end

    private

    def resource
      @_resource ||= current_user.albums.find(params[:id])
    end
  end
end
