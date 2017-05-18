class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :description, :created_at, :updated_at, :tag_list,
             :file, :album_id

  def tag_list
    object.tags.map(&:name)
  end
end
