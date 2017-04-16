class RemoveUserFromBurger < ActiveRecord::Migration[5.0]
  def change
  	remove_column :burgers, :user_id, :integer
  end
end
