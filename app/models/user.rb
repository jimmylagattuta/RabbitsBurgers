class User < ApplicationRecord

	has_secure_password

	has_many :orders
	has_many :order_items

	validates :email, presence: true
	validates :email, uniqueness: true
	validates :password_digest, presence: true
end
