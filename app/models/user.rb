class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable , :rememberable, :validatable,
         :confirmable, :omniauthable
  include DeviseTokenAuth::Concerns::User

  has_many :albums
  has_many :photos, through: :albums
  has_many :comments

  has_many :active_relationships, class_name: 'Relationship',
                                  foreign_key: 'follower_id',
                                  dependent: :destroy
  has_many :passive_relationships, class_name: 'Relationship',
                                   foreign_key: 'followed_id',
                                   dependent: :destroy
  has_many :following, through: :active_relationships, source: :followed
  has_many :followers, through: :passive_relationships, source: :follower
end
