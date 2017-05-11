document.addEventListener("DOMContentLoaded", function(event) {

	var app = new Vue({
		el: '#interactivemenu',
		data: {
			burgers: [],
			items: [],
			ingredients: [],
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
				this.burgers = result["burgers"];
				this.items = result["items"];
				this.ingredients = result["ingredients"];
				console.log(this.burgers);
				console.log(this.items);
				console.log(this.ingredients);
			}).bind(this)

		},
		methods: {
			clickButtonBurger: function(burger) {
				console.log('Working');
				console.log(burger);
				// button.visible = !button.visible;
				variable = document.querySelector('.menubuttons1');
				variable.style.borderColor = "green";

				if (!this.visible) {
					other = document.querySelector('.menubuttons2');
					others = document.querySelector('.menubuttons3');
					others2 = document.querySelector('.menubuttons4');
			 		document.querySelector(".menubuttons2").innerHTML = "";
			 		document.querySelector(".menubuttons3").innerHTML = "";
			 		document.querySelector(".menubuttons4").innerHTML = "";
					
					other.style.borderColor = "black";
					others.style.borderColor = "black";
					others2.style.borderColor = "black";
					this.visible = !this.visible;
				} else if (this.visible) {
					variable = document.querySelector('.menubuttons1');
					variable.style.borderColor = "";
					variable.style.borderWidth = "";
					other = document.querySelector('.menubuttons2');
					others = document.querySelector('.menubuttons3');
					others2 = document.querySelector('.menubuttons4');
			 		document.querySelector(".menubuttons2").innerHTML = "Fries & Drinks";
			 		document.querySelector(".menubuttons3").innerHTML = "Build-A-Burger";
			 		document.querySelector(".menubuttons4").innerHTML = "Finished";
					
					other.style.borderColor = "";
					others.style.borderColor = "";
					others2.style.borderColor = "";
					this.visible = !this.visible;
				}




				console.log('Working');
			},








			 clickButtonFries: function(friesanddrinks) {	
				console.log('Working');
				console.log(friesanddrinks); 
				// button.visible = !button.visible;
				variable = document.querySelector('.menubuttons2');
				variable.style.borderColor = "green";

				if (!this.visible) {
					other = document.querySelector('.menubuttons1');
					others = document.querySelector('.menubuttons3');
					others2 = document.querySelector('.menubuttons4');
		 			document.querySelector(".menubuttons1").innerHTML = "";
		 			document.querySelector(".menubuttons3").innerHTML = "";
		 			document.querySelector(".menubuttons4").innerHTML = "";
				
					other.style.borderColor = "black";
					others.style.borderColor = "black";
					others2.style.borderColor = "black";
					this.visible = !this.visible;
				} else if (this.visible) {
					variable = document.querySelector('.menubuttons2');
					variable.style.borderColor = "";
					variable.style.borderWidth = "";
					other = document.querySelector('.menubuttons1');
					others = document.querySelector('.menubuttons3');
					others2 = document.querySelector('.menubuttons4');
			 		document.querySelector(".menubuttons1").innerHTML = "Burgers";
			 		document.querySelector(".menubuttons3").innerHTML = "Build-A-Burger";
			 		document.querySelector(".menubuttons4").innerHTML = "Finished";
					
					other.style.borderColor = "";
					others.style.borderColor = "";
					others2.style.borderColor = "";
					this.visible = !this.visible;

				}


				console.log('Working');

			},








			 clickButtonBuild: function(buildaburger) {	
				console.log('Working');
				console.log(buildaburger); 
				// button.visible = !button.visible;
				variable = document.querySelector('.menubuttons3');
				variable.style.borderColor = "green";
				
				if (!this.visible) {
					other = document.querySelector('.menubuttons1');
					others = document.querySelector('.menubuttons2');
					others2 = document.querySelector('.menubuttons4');
		 			document.querySelector(".menubuttons1").innerHTML = "";
		 			document.querySelector(".menubuttons2").innerHTML = "";
		 			document.querySelector(".menubuttons4").innerHTML = "";
					
					other.style.borderColor = "black";
					others.style.borderColor = "black";
					others2.style.borderColor = "black";
					this.visible = !this.visble;
				} else if (this.visible) {
					variable = document.querySelector('.menubuttons3');
					variable.style.borderColor = "";
					variable.style.borderWidth = "";
					other = document.querySelector('.menubuttons1');
					others = document.querySelector('.menubuttons2');
					others2 = document.querySelector('.menubuttons4');
		 			document.querySelector(".menubuttons1").innerHTML = "Burgers";
		 			document.querySelector(".menubuttons2").innerHTML = "Fries & Drinks";
		 			document.querySelector(".menubuttons4").innerHTML = "Finished";
					
					other.style.borderColor = "";
					others.style.borderColor = "";
					others2.style.borderColor = "";
					this.visible = !this.visble;					
				}

				
				console.log('Working');
			},










			 clickButtonFinished: function(finished) {	
				console.log('Working');
				console.log(finished); 
				// button.visible = !button.visible;
				variable = document.querySelector('.menubuttons4');
				variable.style.borderColor = "green";

				if (!this.visible) {
					other = document.querySelector('.menubuttons1');
					others = document.querySelector('.menubuttons2');
					others2 = document.querySelector('.menubuttons3');
		 			document.querySelector(".menubuttons1").innerHTML = "";
		 			document.querySelector(".menubuttons2").innerHTML = "";
		 			document.querySelector(".menubuttons3").innerHTML = "";
					
					other.style.borderColor = "black";
					others.style.borderColor = "black";
					others2.style.borderColor = "black";
					this.visible = !this.visible;
				} else if (this.visible) {
					variable = document.querySelector('.menubuttons4');
					variable.style.borderColor = "";
					variable.style.borderWidth = "";
					other = document.querySelector('.menubuttons1');
					others = document.querySelector('.menubuttons2');
					others2 = document.querySelector('.menubuttons3');
		 			document.querySelector(".menubuttons1").innerHTML = "Burgers";
		 			document.querySelector(".menubuttons2").innerHTML = "Fries & Drinks";
		 			document.querySelector(".menubuttons3").innerHTML = "Build-A-Burger";
					
					other.style.borderColor = "";
					others.style.borderColor = "";
					others2.style.borderColor = "";
					this.visible = !this.visible;	
				}



				console.log('Working');
			}




		}

	});
});