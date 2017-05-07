class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :confirmable

  has_many :albums
  has_many :photos, through: :albums
  has_many :comments
end
