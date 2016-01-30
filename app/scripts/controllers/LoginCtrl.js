(function (){
	function LoginCtrl ($scope, AuthManager){
		this.title = "Login";
		$scope.login = AuthManager.login;
		$scope.isLoggedOut = AuthManager.isLoggedOut;
	}
	
	angular
		.module('blocitoff')
		.controller("LoginCtrl", ['$scope', 'AuthManager', LoginCtrl]);
})();