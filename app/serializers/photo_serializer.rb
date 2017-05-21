class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :description, :created_at, :updated_at, :tag_list,
             :file, :album_id, :album, :user, :object_type

  def object_type
    object.class.name
  end

  def user
    object.album.user
  end

  def tag_list
    object.tags.map(&:name)
  end
end
