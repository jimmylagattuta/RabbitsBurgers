class OrderItem < ApplicationRecord
	has_many :burgers
	has_many :items
	belongs_to :order, optional: true
	belongs_to :menu_item, :polymorphic => true
	

end
