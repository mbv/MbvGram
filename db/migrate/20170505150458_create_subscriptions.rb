class CreateSubscriptions < ActiveRecord::Migration[5.0]
  def change
    create_table :subscriptions do |t|
      t.references :from_user
      t.references :to_user

      t.timestamps
    end
  end
end
