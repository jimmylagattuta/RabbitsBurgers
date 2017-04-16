class RabbitsController < ApplicationController
	#https://github.com/jimmylagattuta/RabbitsBurgers.git
	before_action :authenticate_user!, except: [:home, :show]
	before_action :authenticate_admin!, except: [:home, :show]


	def home
		@burgers = Burger.all
		@ingredients = Ingredient.all
	end

	def show
		burger_id = params[:id]
		@burger = Burger.find_by(id: burger_id)
	end
end
