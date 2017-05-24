class ChargesController < ApplicationController

	def new
	end

	def create
  	# Amount in cents

  	customer = Stripe::Customer.create(
   		:email => params[:stripeEmail],
    	:source  => params[:stripeToken]
  	)

	charge = Stripe::Charge.create(
    	:customer    => customer.id,
    	:amount      => @amount,
    	:description => 'Rails Stripe customer',
    	:currency    => 'usd'
	)


end
