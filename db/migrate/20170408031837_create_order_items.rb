class CreateOrderItems < ActiveRecord::Migration[5.0]
  def change
    create_table :order_items do |t|
      t.decimal :foreign_id
      t.string :foreign_type
      t.decimal :user_id
      t.decimal :order_id
      t.integer :quantity
      t.string :status

      t.timestamps
    end
  end
end
