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
		if session[:id]
			session[:id] = nil
			redirect_to "/rabbitsburgers"
		end

	end
end
