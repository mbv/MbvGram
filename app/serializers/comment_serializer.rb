class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user, :photo, :text, :created_at, :updated_at, :can_delete

  def can_delete
    scope.can? :destroy, object
  end
end