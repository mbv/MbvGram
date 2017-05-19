class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :created_at, :updated_at, :tag_list, :object_type

  def object_type
    object.class.name
  end

  def tag_list
    object.tags.map(&:name)
  end
end
