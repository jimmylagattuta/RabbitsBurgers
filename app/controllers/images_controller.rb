class ImagesController < ApplicationController
	def new
		@burger = Burger.find_by(id: params[:id])
	end

	def create
		@burger = Burger.find_by(id: params[:id])
		input_url = params[:burger_image]

		@image_add = Image.create(photo: input_url, burger_id: @burger.id)
		redirect_to "/rabbitsburgers/#{@burger.id}"

	end
end
