(function(){
	function ArchiveCtrl () {
		this.title = "Archived Tasks";
		
		this.archivedTasks = [
			{name: "Wash Dishes", priority: "high", status: "expired"},
			{name: "Clean room", priority: "low", status: "completed"}
		];
	}
	
	angular
		.module('blocitoff')
		.controller('ArchiveCtrl', ArchiveCtrl)
})();