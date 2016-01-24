(function(){
	function ArchiveCtrl ($scope, TaskManager) {
		this.title = "Archived Tasks";
		$scope.tasks = TaskManager.tasks;
		$scope.deleteTask = TaskManager.deleteTask;
	}
	
	angular
		.module('blocitoff')
		.controller('ArchiveCtrl', ['$scope', 'TaskManager', ArchiveCtrl])
})();


/*

	//Service
	var registeredScopes = [];
	SongPlayer.register = function (scope) {
		regusteredScopes.push(scope);
	};
	
	for (...) {
		registeredScopes[i].apply(function () {
		
		})
	}
	

*/