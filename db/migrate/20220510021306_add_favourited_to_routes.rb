class AddFavouritedToRoutes < ActiveRecord::Migration[6.1]
  def change
    add_column :routes, :liked, :boolean, default: false
  end
end
