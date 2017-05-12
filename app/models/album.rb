class Album < ApplicationRecord
  belongs_to :user
  has_many :taggings, as: :taggable
  has_many :tags, through: :taggings
  has_many :photos
  validates :title, length: { minimum: 2 }

  def tag_list
    tags.map(&:name)
  end

  def tag_list=(tag_names)
    self.tags = tag_names.map do |tag_name|
      Tag.where(name: tag_name).first_or_create!
    end
  end
end
