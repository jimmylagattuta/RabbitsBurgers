class Item < ApplicationRecord
	belongs_to :item_type
	has_many :order_items, :as => :menu_item

end
