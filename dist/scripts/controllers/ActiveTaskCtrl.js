(function(){
	function ActiveTaskCtrl ($scope, TaskManager, AuthManager){
		this.title = "Current Tasks";	
		$scope.tasks = TaskManager.tasks;
		
		$scope.addTask = function(e){
			TaskManager.addTask($scope.newTaskInput, $scope.newTaskPriorityInput);
			$scope.newTaskInput = "";
			$scope.newTaskPriorityInput = "";
		};
		
		$scope.deleteTask = TaskManager.deleteTask;
		$scope.completeTask = TaskManager.completeTask;
		
		$scope.login = AuthManager.login;
		$scope.logout = AuthManager.logout;
	}
	
	angular
		.module('blocitoff')
		.controller('ActiveTaskCtrl', ['$scope', 'TaskManager', 'AuthManager',ActiveTaskCtrl]);
})();