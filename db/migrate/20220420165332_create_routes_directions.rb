class CreateRoutesDirections < ActiveRecord::Migration[6.1]
  def change
    create_table :routes_directions do |t|
      t.integer :route_id
      t.integer :direction_id

      t.timestamps
    end
  end
end
