(function (){
	function AuthManager (TaskManager){
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

		AuthManager.login = function(){
			ref.authWithOAuthPopup("google", function(error, authData) {
				if (error) {
					console.log("Login Failed!", error);
				} else {
					console.log("Authenticated successfully with payload:", authData);
				}
			});	
			
			ref.onAuth(authDataCallback);
		};
		
		AuthManager.logout  = function (){
			ref.unauth();
		};
		
		return AuthManager;
	}
	
	angular
		.module('blocitoff')
		.factory('AuthManager', ['TaskManager', AuthManager]);
})();