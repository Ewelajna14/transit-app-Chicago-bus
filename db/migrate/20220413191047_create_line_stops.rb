class CreateLineStops < ActiveRecord::Migration[6.1]
  def change
    create_table :line_stops do |t|
      t.integer :stop_id
      t.integer :line_id

      t.timestamps
    end
  end
end
