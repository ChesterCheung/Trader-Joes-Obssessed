class LocationSerializer < ActiveModel::Serializer
  attributes :id, :neighborhood, :city
  has_many :product_locations
  has_many :products, through: :product_locations
end
