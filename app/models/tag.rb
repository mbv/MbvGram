class Tag < ApplicationRecord
  has_and_belongs_to_many :albums, uniq: true
  has_and_belongs_to_many :photos, uniq: true
end
