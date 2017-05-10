class TagSerializer < ActiveModel::Serializer
  attributes :id, :text

  def id
    object.name
  end

  def text
    object.name
  end
end
