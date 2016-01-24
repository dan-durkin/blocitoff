(function () {
	function TaskManager($firebaseArray){
		var TaskManager = {};
		var ref = new Firebase("https://bloccitoff.firebaseio.com/data");
		
		TaskManager.tasks = $firebaseArray(ref);
		
		TaskManager.addTask = function(newTaskInput, newTaskPriorityInput){
			if(newTask && newTaskPriority){
				var newTaskName = newTaskInput;
				var newTaskPriority = newTaskPriorityInput;
				
				tasks.$add({
					name: newTaskName,
					priority: newTaskPriority,
					status: "active"
				});
				
				newTask = "";
				newTaskPriority = "";
			}
		};
		
		TaskManager.deleteTask = function (index){
			tasks.$remove(index);
		};
		
		TaskManager.completeTask = function (index){
			var task = tasks[index];
			task.status = "completed";
			tasks.$save(index);
		};
		
		return TaskManager;
	}
	
	angular
		.module('blocitoff')
		.factory('TaskManager', ['$firebaseArray', TaskManager]);
})();