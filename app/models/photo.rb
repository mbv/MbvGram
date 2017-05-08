class Photo < ApplicationRecord
  belongs_to :album
  has_many :taggings, as: :taggable
  has_many :tags, through: :taggings
  has_many :comments
end
