json.id @order.user_id
json.subtotal @order.subtotal
json.tax @order.tax
json.total @order.total


# STRIPE API
# <!-- div class="containercheckout">
# 	<h1> Checkout Here </h1>
# 	<br>
# 	<p><% @orderitems.each d o | i t e m| %>
# 			<%= item.menu_item.n a m e %><br>
# 			$<%= item.menu_item.price %><br>
# 		# <% e n d %>
# 	</p>
# 	<h3>Your Total: $<%= @total %> </h3>

# 	<br>
# 	<form action="/your-server-side-code" method="POST">
# 	  <script
# 	    src="https://checkout.stripe.com/checkout.js" class="stripe-button"
# 	    data-key="pk_test_L1LZtM3Cu1haNRvm3imSoZfu"
# 	    data-amount="999"
# 	    data-name="Demo Site"
# 	    data-description="Widget"
# 	    data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
# 	    data-locale="auto">
# 	  </script>
# 	</form>
# </div> -->