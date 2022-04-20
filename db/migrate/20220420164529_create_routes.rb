class CreateRoutes < ActiveRecord::Migration[6.1]
  def change
    create_table :routes do |t|
      t.string :route
      t.string :name
      t.string :rtclr
      t.string :rtdd

      t.timestamps
    end
  end
end
