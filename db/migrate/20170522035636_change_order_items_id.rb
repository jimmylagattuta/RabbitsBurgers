class ChangeOrderItemsId < ActiveRecord::Migration[5.0]
  def change
  	change_column :order_items, :order_id, :integer
  end
end
