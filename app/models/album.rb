class Album < ApplicationRecord
  belongs_to :user
  has_and_belongs_to_many :tags, uniq: true
  has_many :photos
end
