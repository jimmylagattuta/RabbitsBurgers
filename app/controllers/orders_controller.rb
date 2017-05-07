class OrdersController < ApplicationController
	before_action :authenticate_user!
	def new
	end



		# product = Product.find_by(id: params[:product_id])
		# input_subtotal = product.price * params[:quantity].to_i
		# input_tax = product.price * 0.09
		# input_total = input_subtotal + input_tax
		# order = Order.create(user_id: current_user.id, 
		# 					 subtotal: input_subtotal, 
		# 					 tax: input_tax, 
		# 					 total: input_total)

		# redirect_to "/orders/#{order.id}"

	def create
		
		@final_products = OrderItem.where(user_id: current_user.id,
										  status: "Bagged")
		subtotal = 0
		@final_products.each do |product|
		 	subtotal += (product.quantity * product.menu_item.price)
		 	puts "*" * 100
		 	puts subtotal + 1
		 	puts "*" * 100
		 end
		puts "*" * 100
		puts subtotal + 3
		puts "*" * 100

		tax = subtotal * 0.09
		total = subtotal + tax
		user_id = current_user.id
		order = Order.create(user_id: current_user.id,
								   subtotal: subtotal,
								   tax: tax,
								   total: total)
		@final_products.each do |product|
			product.status = "Purchased"
			product.order_id = order.id
			product.save
		end	
		redirect_to "/rabbitsburgers#chefs"
	end

	def show
		@order = Order.find_by(id: params[:id]
		@order.order_items
	end
end
