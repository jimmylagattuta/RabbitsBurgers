document.addEventListener("DOMContentLoaded", function(event) {

	var app = new Vue({
		el: '#interactivemenu',
		data: {
			burgers: [],
			items: [],
			ingredients: [],
			bag: [],
			total: 0,
			orderdetails: [],
			order: [],
			ordercontents: [],
			finalorder: [],
			orderitem: [],
			menu_item_id: 0,
			menu_item_type: '',
			status: '',
			newBurger: [],
			buttons: [
			{
				name: "Burgers",
				visible: true
			},
			{
				name: "Fries & Drinks",
				visible: true
			},
			{
				name: "Build-A-Burger",
				visible: true
			},
			{
				name: "Finished",
				visible: true
			}],
			build: [
			{	
				name: "Build A Burger",
				ready: false
			},
			{
				name: "Reset",
				ready: false
			}]
		},
		mounted: function() {
			console.log('Working');
			$.get('http://localhost:3000/api/menu.json', function(result) {
				this.burgers = (result["burgers"]);
				// this.burgers.push(result["burgers"]);
				console.log('$$$$$$$$$$$$$$$This.burgers below$$$$$$$$$$$$$$$$$$');
				console.log(this.burgers);
				console.log(this.burgers[0].name);
				console.log(this.burgers[0].ingredients);

				this.items = result["items"];
				// this.items.push(result["items"]);
				console.log('this.items below');
				console.log(this.items);
				console.log("this.ingredients below");
				console.log(this.ingredients);
				this.ingredients = result["ingredients"];
				// this.ingredients.push(result["ingredients"]);
				console.log('This.ingredients below');
				console.log(this.ingredients);
				console.log(this.bag);
			}.bind(this));

		},
		methods: {
			clickButtonBurger: function(burger) {
				console.log('Working');
				console.log(this.burgers);
				console.log(burger);
				// button.visible = !button.visible;
				variable = document.querySelector('.menubuttons1');
				variable.style.borderWidth = "thick";
				variable.style.borderColor = "green";

				if (this.buttons[0].visible) {
					// other = document.querySelector('.menubuttons2');
					// others = document.querySelector('.menubuttons3');
					// others2 = document.querySelector('.menubuttons4');
			 	// 	document.querySelector(".menubuttons2").innerHTML = "";
			 	// 	document.querySelector(".menubuttons3").innerHTML = "";
			 	// 	document.querySelector(".menubuttons4").innerHTML = "";
					
					// other.style.borderColor = "black";
					// others.style.borderColor = "black";
					// others2.style.borderColor = "black";
					console.log(this.buttons[0].visible);
					this.buttons[0].visible = false;
					console.log(this.buttons[0].visible);					
				} else if (!this.buttons[0].visible) {
					variable = document.querySelector('.menubuttons1');
					variable.style.borderColor = "";
					variable.style.borderWidth = "";
					// other = document.querySelector('.menubuttons2');
					// others = document.querySelector('.menubuttons3');
					// others2 = document.querySelector('.menubuttons4');
			 	// 	document.querySelector(".menubuttons2").innerHTML = "Fries & Drinks";
			 	// 	document.querySelector(".menubuttons3").innerHTML = "Build-A-Burger";
			 	// 	document.querySelector(".menubuttons4").innerHTML = "Finished";
					
					// other.style.borderColor = "";
					// others.style.borderColor = "";
					// others2.style.borderColor = "";
					console.log(this.buttons[0].visible);
					this.buttons[0].visible = true;
					console.log(this.buttons[0].visible);

				}


				console.log('Working');
			},









			 clickButtonFries: function(friesanddrinks) {	
				console.log('Working');
				console.log(friesanddrinks); 
				// button.visible = !button.visible;
				variable = document.querySelector('.menubuttons2');
				variable.style.borderColor = "green";
				variable.style.borderWidth = "thick";

				if (this.buttons[1].visible) {
					// other = document.querySelector('.menubuttons1');
					// others = document.querySelector('.menubuttons3');
					// others2 = document.querySelector('.menubuttons4');
		 		// 	document.querySelector(".menubuttons1").innerHTML = "";
		 		// 	document.querySelector(".menubuttons3").innerHTML = "";
		 		// 	document.querySelector(".menubuttons4").innerHTML = "";
				
					// other.style.borderColor = "black";
					// others.style.borderColor = "black";
					// others2.style.borderColor = "black";
					this.buttons[1].visible = false;
				} else if (!this.buttons[1].visible) {
					variable = document.querySelector('.menubuttons2');
					variable.style.borderColor = "";
					variable.style.borderWidth = "";
					// other = document.querySelector('.menubuttons1');
					// others = document.querySelector('.menubuttons3');
					// others2 = document.querySelector('.menubuttons4');
			 	// 	document.querySelector(".menubuttons1").innerHTML = "Burgers";
			 	// 	document.querySelector(".menubuttons3").innerHTML = "Build-A-Burger";
			 	// 	document.querySelector(".menubuttons4").innerHTML = "Finished";
					
					// other.style.borderColor = "";
					// others.style.borderColor = "";
					// others2.style.borderColor = "";
					this.buttons[1].visible = true;
				}


				console.log('Working');

			},








			 clickButtonBuild: function(buildaburger) {	
				console.log('Working');
				console.log(buildaburger); 
				// button.visible = !button.visible;
				variable = document.querySelector('.menubuttons3');
				variable.style.borderColor = "green";
				variable.style.borderWidth = "thick";
				
				if (this.buttons[2].visible) {
					// other = document.querySelector('.menubuttons1');
					// others = document.querySelector('.menubuttons2');
					// others2 = document.querySelector('.menubuttons4');
		 		// 	document.querySelector(".menubuttons1").innerHTML = "";
		 		// 	document.querySelector(".menubuttons2").innerHTML = "";
		 		// 	document.querySelector(".menubuttons4").innerHTML = "";
					
					// other.style.borderColor = "black";
					// others.style.borderColor = "black";
					// others2.style.borderColor = "black";
					this.buttons[2].visible = false;
				} else if (!this.buttons[2].visible) {
					variable = document.querySelector('.menubuttons3');
					variable.style.borderColor = "";
					variable.style.borderWidth = "";
					// other = document.querySelector('.menubuttons1');
					// others = document.querySelector('.menubuttons2');
					// others2 = document.querySelector('.menubuttons4');
		 		// 	document.querySelector(".menubuttons1").innerHTML = "Burgers";
		 		// 	document.querySelector(".menubuttons2").innerHTML = "Fries & Drinks";
		 		// 	document.querySelector(".menubuttons4").innerHTML = "Finished";
					
					// other.style.borderColor = "";
					// others.style.borderColor = "";
					// others2.style.borderColor = "";
					this.buttons[2].visible = true;					
				}

				
				console.log('Working');
			},









			 clickButtonFinished: function(finished) {	
				console.log('Working');
				console.log(finished); 
				// button.visible = !button.visible;
				variable = document.querySelector('.menubuttons4');
				// variable.style.borderColor = "green";
				// variable.style.borderWidth = "thick";

				if (this.buttons[3].visible) {
					// other = document.querySelector('.menubuttons1');
					// others = document.querySelector('.menubuttons2');
					// others2 = document.querySelector('.menubuttons3');
		 		// 	document.querySelector(".menubuttons1").innerHTML = "";
		 		// 	document.querySelector(".menubuttons2").innerHTML = "";
		 		// 	document.querySelector(".menubuttons3").innerHTML = "";
					
					// other.style.borderColor = "black";
					// others.style.borderColor = "black";
					// others2.style.borderColor = "black";
					this.buttons[3].visible = false;
					variable.innerHTML = "Empty Bag";
				} else if (!this.buttons[3].visible) {
					variable = document.querySelector('.menubuttons4');
					variable.style.borderColor = "";
					variable.style.borderWidth = "";
					// other = document.querySelector('.menubuttons1');
					// others = document.querySelector('.menubuttons2');
					// others2 = document.querySelector('.menubuttons3');
		 		// 	document.querySelector(".menubuttons1").innerHTML = "Burgers";
		 		// 	document.querySelector(".menubuttons2").innerHTML = "Fries & Drinks";
		 		// 	document.querySelector(".menubuttons3").innerHTML = "Build-A-Burger";
					
					// other.style.borderColor = "";
					// others.style.borderColor = "";
					// others2.style.borderColor = "";
					this.buttons[3].visible = true;
				this.bag = [],
				variable.innerHTML = "Your Bag is Empty";
				}



				console.log('Working');
			},



			addBag: function(add) {
				console.log('Working');
				console.log(add);
				console.log(this.bag);
				this.bag.push(add);
				console.log(this.bag);
				var tot = parseFloat(this.total);
				var pri = parseFloat(add.price);
				this.total = tot + pri;
				console.log(this.total);
				variable1 = document.querySelector('.menubuttons1');
				console.log('variable below');
				console.log(variable1);
				variable1.style.borderColor = "";
				variable1.style.borderWidth = "";
				variable2 = document.querySelector('.menubuttons2');
				console.log('variable below');
				console.log(variable2);
				variable2.style.borderColor = "";
				variable2.style.borderWidth = "";
				variable3 = document.querySelector('.menubuttons3');
				console.log('variable below');
				console.log(variable3);
				variable3.style.borderColor = "";
				variable3.style.borderWidth = "";
				variable4 = document.querySelector('.menubuttons4');
				console.log('variable below');
				console.log(variable4);
				variable4.style.borderColor = "";
				variable4.style.borderWidth = "";
				this.buttons[0].visible = true;
				this.buttons[1].visible = true;
				this.buttons[2].visible = true;
				this.buttons[3].visible = true;
			},

			ingredientSelect: function(ingredient) {
				console.log('Working');
				console.log('Working');
				console.log(ingredient); 

				var ingredient_id = ingredient.id;
				variable = document.querySelector('#item'+ingredient_id);
				console.log('variable below');
				console.log(variable);
				variable.style.borderColor = "green";
				variable.style.borderWidth = "thick";
				

				
				console.log('Working');
				this.newBurger.push(ingredient);
				console.log('newBurger below');
				console.log(this.newBurger);


		
			},

			emptyIngredients: function() {
				this.buttons[2].visible = true;
				variable2 = document.querySelector('.menubuttons3');

				variable2.style.borderColor = "";
				variable2.style.borderWidth = "";
				this.newBurger = [];
				console.log('Working');
				console.log(this.buttons[2].visible);
				console.log(this.newBurger);
			},

			sendIngredients: function() {
				console.log('this.newBurger below');
				console.log(this.newBurger);
				var burger = JSON.stringify(this.newBurger);
				var burger_to_send = {
					newBurger: burger 
				}
				console.log('burgertosend below ');
				console.log(burger_to_send);
				console.log(this.newBurger);
				$.post('http://localhost:3000/api/buildburger.json', burger_to_send, function(result) {
					console.log('result below');
					console.log(result);
					this.bag.push(result);
					this.total = this.total + result.price;
					this.buttons[2].visible = true;
				variable = document.querySelector('.menubuttons3');
				console.log('variable below');
				console.log(variable);
				variable.style.borderColor = "";
				variable.style.borderWidth = "";
				}.bind(this))				
			},

			checkOut: function() {

				// console.log('Working');
				// console.log(this.bag[0]);
				// if (this.bag[0].burger_type_id) {
				// 	var params = {
				// 		menu_item_id: this.bag[0].id,
				// 		menu_item_type: this.bag[0].burger_type_id,
				// 		quantity: 1,
				// 		status: 'Bagged'
				// 	};
				// } else if (this.bag[0].item_type_id) {
				// 	var params = {
				// 		menu_item_id: this.bag[0].id,
				// 		menu_item_type: this.bag[0].item_type_id,
				// 		quantity: 1,
				// 		status: 'Bagged'
				// 	};
				// }
				// console.log('params below');
				// console.log(params);
				// console.log(this.bag);
				var identity = document.querySelector('.userid');
				var iden = identity.innerHTML;
				console.log(iden);
				var bag_json = JSON.stringify(this.bag);
				// console.log("this bag in stringified json:")
				// console.log(bag_json);
				var json_to_send = {
					bag: bag_json,
					user_id: iden
				}
				$.post('http://localhost:3000/api/create_order.json', json_to_send, function(result) {
					this.bag = [];
					this.orderdetails.push(result['orderitems']);
					for (var i = 0; i <this.orderdetails.length; i++) {
						console.log(this.orderdetails[i]);
						this.finalorder.push(this.orderdetails[i]);
						console.log(this.finalorder);
					}
					console.log('total below');
					console.log(this.total);

					window.location = "http://localhost:3000/api/checkout"
				}.bind(this))
			},
			orderPost: function() {
				this.orderdetails = [];
				var identity = document.querySelector('.userid');
				console.log(identity);
				var iden = identity.innerHTML;
				var send_to_final = {
					subtotal: parseFloat(this.total),
					user_id: iden
				}
				$.post('http://localhost:3000/api/finalorder.json', send_to_final, function(result) {
					console.log(result);

				})
				
				window.location = "http://localhost:3000/"

			}




		}

	});
});