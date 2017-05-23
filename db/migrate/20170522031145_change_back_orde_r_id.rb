class ChangeBackOrdeRId < ActiveRecord::Migration[5.0]
  def change
  	change_column :order_items, :order_id, :decimal, precision: 9, scale: 2
  end
end
