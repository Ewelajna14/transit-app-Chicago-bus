class RouteSerializer < ActiveModel::Serializer
  attributes :id, :route, :name
  has_many :directions
end
