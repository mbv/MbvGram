class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :address, :image, :object_type

  def object_type
    object.class.name
  end
end
