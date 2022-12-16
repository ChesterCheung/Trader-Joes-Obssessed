class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :price, :location_id, :url
  has_many :product_locations
  has_many :locations, through: :product_locations
end
