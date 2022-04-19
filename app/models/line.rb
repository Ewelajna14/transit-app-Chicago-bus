class Line < ApplicationRecord
    has_many :line_directions
    has_many :directions, through: :line_directions
    has_many :line_stops
    has_many :stops, through: :line_stops
end
