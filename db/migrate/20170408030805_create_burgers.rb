class CreateBurgers < ActiveRecord::Migration[5.0]
  def change
    create_table :burgers do |t|
      t.string :name
      t.decimal :price
      t.integer :burger_type_id
      t.integer :user_id

      t.timestamps
    end
  end
end
