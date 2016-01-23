(function(){
	function ArchiveCtrl ($scope, $firebaseArray) {
		this.title = "Archived Tasks";
		var ref = new Firebase("https://bloccitoff.firebaseio.com/data");
		$scope.tasks = $firebaseArray(ref);
		
		$scope.deleteTask = function (index){
			console.log(index);
			$scope.tasks.$remove(index);
		};
	}
	
	angular
		.module('blocitoff')
		.controller('ArchiveCtrl', ArchiveCtrl)
})();