module Api
  class SearchController < ApiController
    def index
      render json: Elasticsearch::Model.search((params[:text] ? (params[:text] + '*'):'*'), [Album, Photo, User]).records
    end
  end
end
