class ChangeColumnInOrderITems < ActiveRecord::Migration[5.0]
  def change
  	change_column :order_items, :user_id, :integer
  end
end
