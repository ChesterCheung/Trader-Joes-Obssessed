class Review < ApplicationRecord
  belongs_to :user
  belongs_to :product
  validates :user, uniqueness: true
end
