document.addEventListener("DOMContentLoaded", function(event) {

	var app = new Vue({
		el: '#interactivemenu',
		data: {
			burgers: [],
			items: [],
			ingredients: [],
			bag: [],
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
			}]	
		},
		mounted: function() {
			console.log('Working');
			$.get('http://localhost:3000/api/menu.json', function(result) {
				console.log('This.burgers below');
				console.log(this.burgers);
				this.burgers = (result["burgers"]);
				// this.burgers.push(result["burgers"]);
				console.log('This.burgers below');				
				console.log(this.burgers);
				console.log(this.burgers[0].name)
				console.log('This.Items below');
				console.log(this.items);
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
				variable.style.borderColor = "green";
				variable.style.borderWidth = "thick";

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
				}



				console.log('Working');
			},



			addBag: function(add) {
				console.log('Working');
				console.log(add);
				console.log(this.bag);
				this.bag.push(add);
				console.log(this.bag);
			}




		}

	});
});