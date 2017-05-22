class Album < ApplicationRecord
  belongs_to :user
  has_many :taggings, as: :taggable, dependent: :destroy
  has_many :tags, through: :taggings
  has_many :photos, dependent: :destroy
  validates :title, length: {minimum: 2}

  include Elasticsearch::Model
  include Elasticsearch::Model::Callbacks

  settings index: {number_of_shards: 1} do
    mappings dynamic: 'false' do
      indexes :title
      indexes :description

      indexes :tags, type: 'nested' do
        indexes :name
      end
    end
  end

  def as_indexed_json(options = nil)
    as_json(include: { tags: { only: :name } },
            except: [:id, :_id])
  end
end
