# frozen_string_literal: true

class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user, :photo, :text, :created_at, :updated_at,
             :can_delete, :object_type

  def object_type
    object.class.name
  end

  def can_delete
    scope.can? :destroy, object
  end
end
