class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user, :photo, :text, :created_at, :updated_at, :can_delete
end
