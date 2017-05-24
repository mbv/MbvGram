# frozen_string_literal: true

class Photo < ApplicationRecord
  belongs_to :album
  has_many :taggings, as: :taggable, dependent: :destroy
  has_many :tags, through: :taggings
  has_many :comments, dependent: :destroy

  mount_uploader :file, PhotoUploader

  validate :photo_count_within_limit, on: :create

  include Elasticsearch::Model
  include Elasticsearch::Model::Callbacks

  settings index: { number_of_shards: 1 } do
    mappings dynamic: "false" do
      indexes :description

      indexes :tags, type: "nested" do
        indexes :name
      end
    end
  end

  def as_indexed_json(_ = nil)
    as_json(include: { tags: { only: :name } },
            except:  %i[id _id])
  end

  private

  def photo_count_within_limit
    if album.photos(:reload).count >= 50
      errors.add(:base, "Exceeded photo limit")
    end
  end
end
