class CreateAlbumsTagsJoinTable < ActiveRecord::Migration[5.0]
  def change
    create_join_table :albums, :tags do |t|
      t.index :album_id
      t.index :tag_id
    end
  end
end
