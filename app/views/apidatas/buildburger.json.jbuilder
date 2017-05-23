json.id @custom.id
json.name @custom.name
json.price @custom.price
json.burger_type_id @custom.burger_type_id
json.order_item_id @custom.order_item_id

json.set! :burgeringredients do
	json.array! @burgingre.each do |ingre|
		json.id ingre.id
		json.burger_id ingre.burger_id
		json.ingredient_id ingre.ingredient_id
	end

end