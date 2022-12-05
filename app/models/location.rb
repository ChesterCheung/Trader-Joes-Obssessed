class Location < ApplicationRecord
    has_many :product_locations
    has_many :products, through: :product_locations
end
