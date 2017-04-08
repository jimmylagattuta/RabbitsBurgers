class ChangeDecimalsToMore < ActiveRecord::Migration[5.0]
  def change
  	change_column :burger_ingredients, :burger_id, :decimal, precision: 9, scale:2
  	change_column :burger_ingredients, :ingredient_id, :decimal, precision: 9, scale:2
  	change_column :burgers, :price, :decimal, precision: 9, scale:2
  	change_column :ingredients, :price, :decimal, precision: 9, scale:2
  	change_column :item_types, :price, :decimal, precision: 9, scale:2
  	change_column :items, :intem_type_id, :decimal, precision: 9, scale:2
  	change_column :order_items, :foreign_id, :decimal, precision: 9, scale:2
  	change_column :order_items, :user_id, :decimal, precision: 9, scale:2
  	change_column :order_items, :order_id, :decimal, precision: 9, scale:2
  	change_column :orders, :user_id, :decimal, precision: 9, scale:2
  	change_column :orders, :subtotal, :decimal, precision: 9, scale:2
  	change_column :orders, :tax, :decimal, precision: 9, scale:2
  	change_column :orders, :total, :decimal, precision: 9, scale:2


  end
end
