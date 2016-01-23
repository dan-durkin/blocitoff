(function(){
	function ActiveTaskCtrl (){
		this.title = "Current Tasks";
		
		this.activeTasks = [
			{name: "Take out trash", priority: "high", status: "active"},
			{name: "Shovel Snow", priority: "med", status: "active"}
		];
	}
	
	angular
		.module('blocitoff')
		.controller('ActiveTaskCtrl', ActiveTaskCtrl);
})();