# frozen_string_literal: true

class CommentsChannel < ApplicationCable::Channel
  def subscribed
    stop_all_streams
    stream_from "photos:#{current_user.id}:comments"
  end
end