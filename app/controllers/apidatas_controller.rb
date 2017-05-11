class ApidatasController < ApplicationController
	def index
		@burgers = Burger.all
		@ingredients = Ingredient.all
		@items = Item.all
	end 
end
