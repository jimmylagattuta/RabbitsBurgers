class ApidatasController < ApplicationController


	def index
		@burgers = Burger.all
		@ingredients = Ingredient.all
		@items = Item.all
		@burgeringredients = BurgerIngredient.all
	end

	def create
		@bag = params
		identity = @bag['user_id']
		# puts '*' * 100
		# puts 'at bag [bag] below'
		# puts @bag['bag']
		# puts '*' * 100
		newbag = @bag['bag']
		final = JSON.parse(newbag)
		# puts '*' * 100
		# puts final[0]
		# puts '*' * 100
		# @bag = JSON.parse(@bag)
		final.each do |bagitem|
			# puts bagitem.inspect
			# puts "*" * 100
			# puts 'bagitem below'
			# puts bagitem
			# puts "*" * 100
			if bagitem.include?("burger_type_id")
				bagitem = OrderItem.new(menu_item_id: bagitem['id'], 
								   menu_item_type: 'Burger',
								   user_id: identity,
								   order_id: nil,
								   quantity: 1,
								   status: 'Bagged')
				puts 'bagitem below :)'
				puts bagitem.inspect				
				bagitem.save

				if bagitem.save
					puts '*' * 100
					puts 'saved!'
					puts bagitem
					puts '*' * 100
				end
			elsif bagitem.include?("item_type_id")
				bagitem = OrderItem.new(menu_item_id: bagitem['id'],
								menu_item_type: 'Item',
								user_id: identity,
								order_id: nil,
								quantity: 1,
								status: 'Bagged')
				puts 'bagitem below :)'
				puts bagitem.inspect
				bagitem.save
				puts bagitem.errors.full_messages
				if bagitem.save
					puts '*' * 100
					puts 'saved'
					puts bagitem
					puts '*' * 100
				end
			end
			@orderitems = OrderItem.where(status: "Bagged")
			# redirect_to "/checkout"
		end
		render 'order.json.jbuilder'
		# redirect_to '/checkout'


		# 1. Create an order with the total, etc

		# 2. Create an order item for each product in the cart

		# 3. Send back some json to the user about the order (order.json.jbuilder)
		# To use: render :order

		
	end

	def checkout
		info = params
		@subtotal = info['subtotal'].to_i
		identity = info['user_id']
		puts "*" * 100
		puts params
		puts "*" * 100

		puts "*" * 100
		puts @subtotal
		puts "*" * 100

		# function completed in home.js
		@orderitems = OrderItem.where(user_id: identity,
									  status: "Bagged")
		# @orderitems.each do |item|
		# 	@subtotal += item.menu_item.price		
		# end

		# puts "*" * 100
		# puts @subtotal
		# puts "*" * 100
		puts @subtotal
		@tax = @subtotal * 0.09
		puts @tax
		@total = @subtotal + @tax
		puts @total
		@order = Order.create(user_id: identity, 
							  subtotal: @subtotal,
							  tax: @tax,
							  total: @total)
		@orderitems.each do |orditem|
			orditem.status = "Purchased"
			orditem.order_id = @order.id
			orditem.save
		end
		flash[:success] = "Order Submitted"
		render "checkout.json.jbuilder"

	end

	def finish
		@orderitems = OrderItem.where(user_id: current_user.id,
									   status:"Bagged")
		@total = 0

		@orderitems.each do |orderitem|
			@total += orderitem.menu_item.price
		end

		@ingredients = Ingredient.all

	end

	def buildburger
		ingredients = []
		info = params
		burg = info['newBurger']

		puts "*" * 100
		puts burg
		puts "*" * 100
		@custom = Burger.new(name:"Custom Burger",
							price:4.50,
							burger_type_id:1,
							order_item_id:nil)
		@custom.save
		@addburger = @custom
		@addburger = OrderItem.new(menu_item_id: @custom['id'],
								menu_item_type: 'Burger',
								user_id: current_user.id,
								order_id: nil,
								quantity: 1,
								status: 'Bagged')
		@addburger.save
		new_info = JSON.parse(burg)
		puts "*" * 100
		puts @custom.id
		puts new_info
		puts "*" * 100
		new_info.each do |ingr|
			ing = BurgerIngredient.new(burger_id: @custom.id,
							 		   ingredient_id: ingr['id'])
			ing.save
			puts ing.errors.full_messages

		end
		@burgingre = BurgerIngredient.where(burger_id: @custom.id)
		# @custom.delete
	end

	# STRIPE API
	def new
	end

	# def create
 #  	# Amount in cents
 #  	@order = Order.last
 #  	@amount = @order.total

 #  	customer = Stripe::Customer.create(
 #   		:email => params[:stripeEmail],
 #    	:source  => params[:stripeToken]
 #  	)

	# charge = Stripe::Charge.create(
 #    	:customer    => customer.id,
 #    	:amount      => @amount,
 #    	:description => 'Rails Stripe customer',
 #    	:currency    => 'usd'
	# )

	# rescue Stripe::CardError => e
	# flash[:error] = e.message
	# redirect_to new_charge_path
	# end

end
