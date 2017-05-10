class Photo < ApplicationRecord
  belongs_to :album
  has_many :taggings, as: :taggable
  has_many :tags, through: :taggings
  has_many :comments
  validate :photo_count_within_limit, on: :create

  def photo_count_within_limit
    if album.photos(:reload).count >= 50
      errors.add(:base, 'Exceeded photo limit')
    end
  end
end
