class CHangeForeignColumns < ActiveRecord::Migration[5.0]
  def change
  	rename_column :order_items, :foreign_id, :menu_item_id
  	rename_column :order_items, :foreign_type, :menu_item_type
  end
end
