class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :created_at, :updated_at, :tag_list

  def tag_list
    object.tags.map(&:name)
  end
end
