class UsersController < ApplicationController

	def new
		@user = User.new
	end

	def create
		@user = User.new(first_name: params[:first_name],
						 last_name: params[:last_name],
						 email: params[:email],
						 password: params[:password],
						 password_confirmation: params[:password_confirmation],
						 admin: params[:admin])
		session[:id] = @user_id
		@user.save
		redirect_to "/rabbitsburgers"
		
	end
	def show
		@user = User.find_by(id: session[:id]) 
	end

	def edit
		id = params[:id]
	end

	def update
		@user = User.find_by(id: current_user.id)
		@user.first_name = params[:first_name]
		@user.last_name = params[:last_name]
		@user.email = params[:email]
		@user.save
		if @user.save
			redirect_to "/rabbitsburgers"
		end


	end
end
