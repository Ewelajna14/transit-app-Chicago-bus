class CreateFovouriteLines < ActiveRecord::Migration[6.1]
  def change
    create_table :fovourite_lines do |t|
      t.integer :user_id
      t.string :route
      t.string :name
      t.boolean :liked

      t.timestamps
    end
  end
end
