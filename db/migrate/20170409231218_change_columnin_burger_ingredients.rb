class ChangeColumninBurgerIngredients < ActiveRecord::Migration[5.0]
  def change
  	change_column :burger_ingredients, :burger_id, :integer
  	change_column :burger_ingredients, :ingredient_id, :integer
  end
end
