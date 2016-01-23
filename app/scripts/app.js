(function(){	
	function config ($locationProvider, $stateProvider){
		$locationProvider
			.html5Mode({
				enabled: true,
				requireBase: false
			});

		$stateProvider
			.state('active', {
				url: '/',
				controller: 'ActiveTaskCtrl as active',
				templateUrl: '/templates/active.html'
			})
			.state('archive',{
				url: '/archive',
				controller: 'ArchiveCtrl as archive',
				templateUrl: 'templates/archive.html'
			});
	}

	angular
		.module('blocitoff', ['ui.router', 'firebase'])
		.config(config);
})();