class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :description, :created_at, :updated_at, :tag_list, :file
end
