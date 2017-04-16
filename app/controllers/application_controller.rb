class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

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

  end
