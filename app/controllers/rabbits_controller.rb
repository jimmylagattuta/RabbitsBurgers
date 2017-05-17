class RabbitsController < ApplicationController
	#https://github.com/jimmylagattuta/RabbitsBurgers.git
	before_action :authenticate_user!, except: [:home, :show]
	before_action :authenticate_admin!, except: [:home, :show]
	def menu		
	end
	def home
		@burgers = Burger.all
		@burgerssorted = @burgers.sort
		@ingredients = Ingredient.all
		@order = Order.last
	end

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
		flash[:success] = "Order Completed"
		redirect_to "/rabbitsburgers#chefs"
	end


	def show
		burger_id = params[:id]
		@burger = Burger.find_by(id: burger_id)
	end
end
