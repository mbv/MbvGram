class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :created_at, :updated_at, :tag_ids
end
