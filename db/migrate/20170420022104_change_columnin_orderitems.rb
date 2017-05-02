class ChangeColumninOrderitems < ActiveRecord::Migration[5.0]
  def change
  	change_column :order_items, :foreign_id, :integer
  end
end
