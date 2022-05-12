class AddBusIdToFovoriteLine < ActiveRecord::Migration[6.1]
  def change
    add_column :fovourite_lines, :busId, :integer
  end
end
