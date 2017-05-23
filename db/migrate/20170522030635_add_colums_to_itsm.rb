class AddColumsToItsm < ActiveRecord::Migration[5.0]
  def change
  	add_column :items, :order_item_id, :integer
  	change_column :order_items, :order_id, :integer
  end
end
