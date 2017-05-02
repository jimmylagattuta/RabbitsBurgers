class Order < ApplicationRecord
	has_many :order_items
	belongs_to :user
	has_many :burgers, through: :order_items
	has_many :items, through: :order_items


end
