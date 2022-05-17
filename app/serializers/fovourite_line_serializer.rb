class FovouriteLineSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :route, :name, :busId

  belongs_to :user
end
