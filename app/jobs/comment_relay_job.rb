class CommentRelayJob < ApplicationJob
  def perform(comment)
    if comment.photo.album.user_id != comment.user_id
      ActionCable.server.broadcast "photos:#{comment.photo.album.user_id}:comments",
                                   comment: comment,
                                   photo: comment.photo,
                                   user:    comment.user
    end
  end
end