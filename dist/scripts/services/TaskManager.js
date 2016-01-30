(function () {
	function TaskManager($firebaseArray, $interval){
		var TaskManager = {};
		var ref = new Firebase("https://bloccitoff.firebaseio.com/data");
		var tasks = TaskManager.tasks = $firebaseArray(ref);
		
		TaskManager.ref = ref;
		
		TaskManager.addTask = function(newTaskInput, newTaskPriorityInput){
			if(newTaskInput && newTaskPriorityInput){
				tasks.$add({
					name: newTaskInput,
					priority: parseInt(newTaskPriorityInput),
					status: "active",
					timeCreated: Firebase.ServerValue.TIMESTAMP
				});
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
		
		var interval = $interval(function () {
			var now = new Date(),
				expired = 1000 * 60 * 60 * 24 * 7;
			
			for (var i = 0; i < tasks.length; i++) {
				var timeSinceCreated = now - tasks[i].timeCreated; 
				if(tasks[i].status === 'active' && timeSinceCreated > expired){
					tasks[i].status = "expired";
					tasks.$save(i);
				}
			}
		}, 60000);
		
		TaskManager.interval = interval;
			
		return TaskManager;
	}
	
	angular
		.module('blocitoff')
		.factory('TaskManager', ['$firebaseArray', '$interval', TaskManager]);
})();