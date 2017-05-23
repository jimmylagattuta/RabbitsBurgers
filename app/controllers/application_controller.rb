class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception

  def current_user
  	@current_user ||= User.find_by(id: session[:id]) if session[:id]
  end
  helper_method :current_user
  

	def authenticate_user!
		if !current_user
			redirect_to "/login"
		end
	end


	def authenticate_admin!
		if !(current_user && current_user.admin)
			redirect_to "/products"
		end 

	end 
	def menu
		@menu = Burger.all	
	end
	helper_method :menu

	def burgersjavascript
		@burgersjavascript = 0
	end
	helper_method :burgersjavascript

	def final_products

		@final_products = OrderItem.where(user_id: current_user.id,
										  status: "Bagged")

	end
	helper_method :final_products

	def show
		@order = Order.find_by(id: params[:id])

	end
	helper_method :order
  end
