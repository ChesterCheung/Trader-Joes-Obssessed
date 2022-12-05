class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :price, :location_id
end
