(function(){
	function LandingCtrl (){
		this.heroTitle = "Hello, it's me.";
	}
	
	angular
		.module('blocitoff')
		.controller('LandingCtrl', LandingCtrl);
})();