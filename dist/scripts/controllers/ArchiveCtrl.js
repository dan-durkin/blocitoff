(function(){
	function ArchiveCtrl ($scope, TaskManager, AuthManager) {
		this.title = "Archived Tasks";
		$scope.tasks = TaskManager.tasks;
		$scope.deleteTask = TaskManager.deleteTask;
		$scope.logOffBlocitoff = AuthManager.logout;
	}
	
	angular
		.module('blocitoff')
		.controller('ArchiveCtrl', ['$scope', 'TaskManager', 'AuthManager', ArchiveCtrl])
})();