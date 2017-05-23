class ChangeTaxtoInteger < ActiveRecord::Migration[5.0]
  def change
  	change_column :orders, :tax, :integer
  	change_column :orders, :subtotal, :integer
  	change_column :orders, :total, :integer
  end
end
