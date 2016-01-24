(function () {
	function TaskManager($scope, $firebaseArray){
		var ref = new Firebase("https://bloccitoff.firebaseio.com/data");
		TaskManager.tasks = $firebaseArray(ref);
		
		TaskManager.addTask = function(e){
			if($scope.newTask && $scope.newTaskPriority){
				var newTaskName = $scope.newTask;
				var newTaskPriority = $scope.newTaskPriority;
				
				$scope.tasks.$add({
					name: newTaskName,
					priority: newTaskPriority,
					status: "active"
				});
				
				$scope.newTask = "";
				$scope.newTaskPriority = "";
			}
		};
		
		TaskManager.deleteTask = function (index){
			$scope.tasks.$remove(index);
		};
		
		TaskManager.completeTask = function (index){
			var task = $scope.tasks[index];
			task.status = "completed";
			$scope.tasks.$save(index);
		};
		
		return TaskManager;
	}
	
	angular
		.module('blocitoff')
		.factory('TaskManager', ['$scope', '$firebaseArray', TaskManager]);
})();