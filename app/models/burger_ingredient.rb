class BurgerIngredient < ApplicationRecord
	belongs_to :burger
	belongs_to :ingredient
	belongs_to :order_item
end
