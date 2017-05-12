class RenameColumnInPhoto < ActiveRecord::Migration[5.0]
  def change
    change_table :photos do |t|
      t.rename :url, :file
    end
  end
end
