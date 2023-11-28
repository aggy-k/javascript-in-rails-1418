class Monument < ApplicationRecord
  validates :name, :address, presence: true
end
