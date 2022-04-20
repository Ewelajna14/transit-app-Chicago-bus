class Direction < ApplicationRecord
    has_many :routes_directions
    has_many :routes, through: :routes_directions
end
