class Album < ApplicationRecord
  belongs_to :user
  has_many :taggings, as: :taggable, dependent: :destroy
  has_many :tags, through: :taggings
  has_many :photos
  validates :title, length: { minimum: 2 }
end
