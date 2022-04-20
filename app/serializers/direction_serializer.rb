class DirectionSerializer < ActiveModel::Serializer
  attributes :id, :direction
  has_many :routes
end
