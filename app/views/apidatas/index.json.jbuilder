json.set! :burgers do


	json.array! @burgers.each do |burger|
		json.id burger.id
		json.name burger.name
		json.price burger.price
		json.burger_type_id burger.burger_type_id
	end
end

json.set! :ingredients do

	json.array! @ingredients.each do |ingredient|
		json.id ingredient.id
		json.name ingredient.name
		json.price ingredient.price

	end
end

json.set! :items do
	
	json.array! @items.each do |item|
		json.id item.id
		json.name item.name
		json.price item.price
		json.item_type_id item.item_type_id
	end
end
