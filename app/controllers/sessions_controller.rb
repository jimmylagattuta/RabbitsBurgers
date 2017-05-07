class SessionsController < ApplicationController

	def new
	end

	def create
		user = User.find_by(email: params[:email])
		if user
			session[:id] = user.id
			redirect_to "/rabbitsburgers"
		else
			redirect_to "login"
		end
	end

	def destroy
		puts "*" * 100
		if session[:id]
			puts "*" * 100
			session[:id] = nil
			puts "*" * 100
			flash[:success] = "You have succussfully signed out"
			redirect_to "/rabbitsburgers"
		end

	end
end
