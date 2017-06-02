# frozen_string_literal: true

module Api
  class SearchController < ApiController
    def index
      render json: @result = Elasticsearch::Model.search((params[:text] ? (params[:text] + "*") : "*"), [Album, Photo, User]).records
    end
  end
end
