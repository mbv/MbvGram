class Photo < ApplicationRecord
  belongs_to :album
  has_and_belongs_to_many :tags, uniq: true
  has_many :comments
end
