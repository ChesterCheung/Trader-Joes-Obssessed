class ProductLocationSerializer < ActiveModel::Serializer
  attributes :id
  has_one :product
  has_one :location
end
