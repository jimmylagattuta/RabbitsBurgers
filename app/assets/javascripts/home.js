document.addEventListener("DOMContentLoaded", function(event) {

	var app = new Vue({
		el: '#interactivemenu',
		data: {
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

		},
		methods: {
			clickButton: function(button) {
				console.log('Working');
				console.log(button.name);
				button.visible = !button.visible;


			}
		}

	});
});