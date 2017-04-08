class CreateBurgerIngredients < ActiveRecord::Migration[5.0]
  def change
    create_table :burger_ingredients do |t|
      t.decimal :burger_id
      t.decimal :ingredient_id

      t.timestamps
    end
  end
end
