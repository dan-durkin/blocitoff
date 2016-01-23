(function(){
	function ActiveTaskCtrl ($scope, $firebaseArray){
		this.title = "Current Tasks";
		
		var ref = new Firebase("https://bloccitoff.firebaseio.com/data");
		$scope.tasks = $firebaseArray(ref);
		
		$scope.addTask = function(e){
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
		
		$scope.deleteTask = function (index){
			$scope.tasks.$remove(index);
		};
		
		$scope.completeTask = function (index){
			var task = $scope.tasks[index];
			task.status = "completed";
			$scope.tasks.$save(index);
		};
	}
	
	angular
		.module('blocitoff')
		.controller('ActiveTaskCtrl', ActiveTaskCtrl);
})();