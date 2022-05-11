class RouteSerializer < ActiveModel::Serializer
  attributes :id, :route, :name, :liked
  has_many :directions
end
