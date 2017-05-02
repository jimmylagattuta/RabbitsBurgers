class Burger < ApplicationRecord
	belongs_to :burger_type
	has_many :burger_ingredients
	has_many :ingredients, through: :burger_ingredients
	has_many :order_items, :as => :menu_item
end
