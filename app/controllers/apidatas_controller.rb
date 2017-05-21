class ApidatasController < ApplicationController
	def index
		@burgers = Burger.all
		@ingredients = Ingredient.all
		@items = Item.all
	end

	def create
		@orderitem = Orderitem.new(menu_item_id: params[:menu_item_id], 
								   menu_item_type: params[:menu_item_type],
								   user_id: current_user.id,
								   order_id: nil,
								   quantity: params[:quantity],
								   status: "Bagged")
		@orderitem.save
	end

	
end
