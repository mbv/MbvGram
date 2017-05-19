class TagSerializer < ActiveModel::Serializer
  attributes :id, :name, :object_type

  def object_type
    object.class.name
  end
end
