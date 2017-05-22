class CreateRelationships < ActiveRecord::Migration[5.0]
  def change
    create_table :relationships do |t|
      t.references :follower
      t.references :followed

      t.timestamps
    end
    add_index :relationships, [:follower_id, :followed_id], unique: true
  end
end
