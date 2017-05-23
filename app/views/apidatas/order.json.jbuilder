json.set! :orderitems do


	json.array! @orderitems.each do |item|
		json.id item.id
		json.menu_item_id item.menu_item_id
		json.menu_item_type item.menu_item_type
		json.user_id item.user_id
		json.quantity item.quantity
		json.status item.status
	end
end
