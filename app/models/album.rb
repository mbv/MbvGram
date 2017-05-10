class Album < ApplicationRecord
  belongs_to :user
  has_many :taggings, as: :taggable
  has_many :tags, through: :taggings
  has_many :photos


  def tag_ids
    tags.map(&:id)
  end

  def tag_ids=(ids)
    self.tags = ids.map do |id|
      Tag.where(id: id).first_or_create!
    end
  end
end
