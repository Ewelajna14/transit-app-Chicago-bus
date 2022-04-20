class Route < ApplicationRecord
    has_many :routes_directions
    has_many :directions, through: :routes_directions
end
