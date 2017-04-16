class BurgerIngredient < ApplicationRecord
	belongs_to :burger
	belongs_to :ingredient
end
