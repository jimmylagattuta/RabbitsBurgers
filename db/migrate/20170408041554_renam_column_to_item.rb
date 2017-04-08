class RenamColumnToItem < ActiveRecord::Migration[5.0]
  def change
  	rename_column :items, :intem_type_id, :item_type_id
  end
end
