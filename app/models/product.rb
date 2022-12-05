class Product < ApplicationRecord
    has_many :product_locations
    has_many :locations, through: :product_locations
    has_many :reviews
    has_many :users, through: :reviews
end
