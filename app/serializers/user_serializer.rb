# frozen_string_literal: true

class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :address, :image,
             :can_follow, :can_unfollow, :can_show_content, :object_type,
             :email, :provider, :uid

  def can_follow
    scope.can? :follow, object
  end

  def can_unfollow
    scope.can? :unfollow, object
  end

  def can_show_content
    scope.can? :show_content, object
  end

  def object_type
    object.class.name
  end
end
