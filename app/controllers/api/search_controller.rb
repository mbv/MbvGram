module Api
  class SearchController < ApiController
    def index
      render json: ThinkingSphinx.search(params[:text], star: true)
    end
  end
end
