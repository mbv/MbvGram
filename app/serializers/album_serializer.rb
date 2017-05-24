# frozen_string_literal: true

class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :created_at, :updated_at,
             :tag_list, :object_type, :sample_photos, :can_update, :can_delete, :can_add_photo

  def object_type
    object.class.name
  end

  def sample_photos
    object.photos.sample(4)
  end

  def can_update
    scope.can? :update, object
  end

  def can_delete
    scope.can? :destroy, object
  end

  def can_add_photo
    scope.can? :add_photo, object
  end

  def tag_list
    object.tags.map(&:name)
  end
end
