class CreateLineDirections < ActiveRecord::Migration[6.1]
  def change
    create_table :line_directions do |t|
      t.integer :line_id
      t.integer :direction_id

      t.timestamps
    end
  end
end
