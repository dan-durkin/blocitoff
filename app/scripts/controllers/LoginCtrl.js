(function (){
	function LoginCtrl ($scope, AuthManager){
		this.title = "Login";		
		$scope.logOnWithGoogle = AuthManager.loginGoogle;
	}
	
	angular
		.module('blocitoff')
		.controller("LoginCtrl", ['$scope', 'AuthManager', LoginCtrl]);
})();