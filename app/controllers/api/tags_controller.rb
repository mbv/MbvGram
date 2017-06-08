# frozen_string_literal: true

module Api
  class TagsController < ApiController
    def index
      respond_with @_resources = Tag.all
    end
  end
end
