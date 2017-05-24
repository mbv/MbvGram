# frozen_string_literal: true

class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :description, :created_at, :updated_at, :tag_list,
             :file, :album_id, :album, :user, :object_type, :can_update, :can_delete

  def object_type
    object.class.name
  end

  def user
    object.album.user
  end

  def can_update
    scope.can? :update, object
  end

  def can_delete
    scope.can? :destroy, object
  end

  def tag_list
    object.tags.map(&:name)
  end
end
