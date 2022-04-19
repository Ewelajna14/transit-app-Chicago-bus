class Direction < ApplicationRecord
    has_many :line_directions
    has_many :lines, through: :line_directions
end
