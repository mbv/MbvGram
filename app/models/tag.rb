class Tag < ApplicationRecord
  has_many :taggings
  has_many :albums, through:  :taggings,
                    source: :taggable,
                    source_type: 'Album'
  has_many :photos, through:  :taggings,
                    source: :taggable,
                    source_type: 'Photo'

  validates :name, length: { minimum: 2 }
end
