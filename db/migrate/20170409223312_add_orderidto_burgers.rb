class AddOrderidtoBurgers < ActiveRecord::Migration[5.0]
  def change
  	add_column :burgers, :order_item_id, :integer
  end
end
