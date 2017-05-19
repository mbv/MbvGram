module Api
  class SearchController < ApplicationController
    def index
      render json: ThinkingSphinx.search(params[:text], star: true)
    end
  end
end
