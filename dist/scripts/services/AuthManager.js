(function (){
	function AuthManager (TaskManager, $state){
		var ref = TaskManager.ref;
		
		function authDataCallback(authData) {
			if (authData) {
				console.log("User " + authData.uid + " is logged in with " + authData.provider);
			} else {
				console.log("User is logged out");
			}
		}
		
		function authHandler(error, authData) {
			if (error) {
				console.log("Login Failed!", error);
			} else {
				console.log("Authenticated successfully with payload:", authData);
			}
		}

		AuthManager.loginGoogle = function(){
			ref.authWithOAuthPopup("google", authHandler);
			ref.onAuth(function (authData) {
				authDataCallback(authData);
				$state.go('active');
			});
		};
		
		AuthManager.logout  = function (){
			ref.unauth();
			$state.go('login');
		};
		
		AuthManager.isLoggedIn = function (){
			return ref.getAuth() ? true : false;
		}
		
		return AuthManager;
	}
	
	angular
		.module('blocitoff')
		.factory('AuthManager', ['TaskManager', '$state',  AuthManager]);
})();