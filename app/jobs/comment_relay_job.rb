class CommentRelayJob < ApplicationJob
  def perform(comment)
    ActionCable.server.broadcast "photos:#{comment.photo.album.user_id}:comments",
                                 comment: comment,
                                 user:    comment.user
  end
end