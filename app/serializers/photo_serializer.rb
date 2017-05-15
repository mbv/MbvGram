class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :description, :created_at, :updated_at, :tag_list,
             :file, :album_id

  def album_id
    object.album.id
  end
end
