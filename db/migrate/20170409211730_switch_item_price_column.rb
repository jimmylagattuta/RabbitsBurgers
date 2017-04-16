class SwitchItemPriceColumn < ActiveRecord::Migration[5.0]
  def change
  	remove_column :item_types, :price, :decimal, precision: 9, scale: 2
  	add_column :items, :price, :decimal, precision: 9, scale: 2
  end
end
