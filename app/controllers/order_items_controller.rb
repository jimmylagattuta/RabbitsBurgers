class OrderItemsController < ApplicationController
	before_action :authenticate_user!
	def index
		@orderitems = OrderItem.all
		@menu = Burger.all
		@orderitem = Burger.find_by(id: params[:id])
		@items = Item.all
	end

	def add
		if params[:id].to_i < 10
			@burgeritem = Burger.find_by(id: params[:id])
		elsif params[:id].to_i > 10
			@itemitem = Item.find_by(id: params[:id])
		end

	


	end

	def new
		@burgeritem = Burger.find_by(id: params[:id])
		@itemitem = Item.find_by(id: params[:id])


	end

	def create
		@orderitem = Burger.find_by(id: params[:id])
		menu_item_id = params[:menu_item_id]
		menu_item_type = params[:menu_item_type]
		user_id = params[:user_id]
		quantity = params[:quantity].to_i
		status = "Bagged"
		@item = OrderItem.create(menu_item_id: menu_item_id, 
								 menu_item_type: menu_item_type,
								 user_id: current_user.id,
								 quantity: quantity,
								 status: status)
		redirect_to "/rabbitsburgers#chefs"
	end

	def destroy
		@order_items = OrderItem.all
		@order_items.each do |item|
			item.delete
		end
	
		redirect_to "/orderitems"
	end
end
