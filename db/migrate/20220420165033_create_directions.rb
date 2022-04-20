class CreateDirections < ActiveRecord::Migration[6.1]
  def change
    create_table :directions do |t|
      t.string :direction

      t.timestamps
    end
  end
end
