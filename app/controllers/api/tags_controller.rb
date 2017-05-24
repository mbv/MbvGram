module Api
  class TagsController < ApiController

    def index
      respond_with Tag.all
    end

    def create
      respond_with Tag.create(tag_params)
    end

    def destroy
      resource.destroy
    end

    private

    def resource
      @_resource ||= Photo.find(params[:id])
    end

    def tag_params
      params.require(:tag).permit!
    end
  end
end
