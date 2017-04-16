class Ingredient < ApplicationRecord
	has_many :burger_ingredients
	has_many :burgers, through: :burger_ingredients
end
