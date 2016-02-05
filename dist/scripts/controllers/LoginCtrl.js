(function (){
	function LoginCtrl ($scope, AuthManager){
		this.title = "Login";		
		$scope.logOnWithGoogle = AuthManager.loginGoogle;
		$scope.isLoggedOut = AuthManager.isLoggedOut;
	}
	
	angular
		.module('blocitoff')
		.controller("LoginCtrl", ['$scope', 'AuthManager', LoginCtrl]);
})();