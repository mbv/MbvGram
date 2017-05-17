class Photo < ApplicationRecord
  belongs_to :album
  has_many :taggings, as: :taggable
  has_many :tags, through: :taggings
  has_many :comments

  mount_uploader :file, PhotoUploader

  validate :photo_count_within_limit, on: :create

  def tag_list
    tags.map(&:name)
  end

  def tag_list=(tag_names)
    self.tags = JSON.parse(tag_names).map do |tag|
      Tag.where(name: tag['name']).first_or_create!
    end
  end

  def photo_count_within_limit
    if album.photos(:reload).count >= 50
      errors.add(:base, 'Exceeded photo limit')
    end
  end
end
