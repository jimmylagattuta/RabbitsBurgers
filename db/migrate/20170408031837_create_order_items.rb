class CreateOrderItems < ActiveRecord::Migration[5.0]
  def change
    create_table :order_items do |t|
      t.references :foreign, polymorphic: true, index: true
      t.decimal :user_id
      t.decimal :order_id
      t.integer :quantity
      t.string :status

      t.timestamps
    end

  end
end
