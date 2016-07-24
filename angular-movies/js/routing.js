angular.module ("movieConfig",[])
	.run (function ($rootScope) {
		$rootScope.number = "sorry, not able to finish the app :-( "
	})

	.config(function($routeProvider) {
		$routeProvider
			.when('/popularmovies', {
				templateUrl: '/templates/popularmovies.html',
				controller: 'popularmoviesController'
			})
			.when('/upcomingmovies', {
				templateUrl: '/templates/upcomingmovies.html',
				controller: 'upcomingmoviesController'
			})
			.when('/nowplayingmovies', {
			templateUrl: '/templates/nowplayingmovies.html',
			controller: 'nowplayingmoviesController'
			})
			.when('/topratedmovies', {
			templateUrl: '/templates/topratedmovies.html',
			controller: 'topratedmoviesController'
			})

			.otherwise({ redirectTo: '/' }); 
	})