angular.module ("myFirstConfig",[])
	.run (function ($rootScope) {
		$rootScope.msg = "Hello, this is my first angular challenge :-) !!"
	})

	.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: '/templates/home.html',
				controller: 'HomeViewController'
			})
			.when('/home', {
				templateUrl: '/templates/home.html',
				controller: 'HomeViewController'
			})
			.when('/about', {
			templateUrl: '/templates/about.html',
			controller: 'AboutViewController'
			})
			.when('/contact', {
			templateUrl: '/templates/contact.html',
			controller: 'ContactViewController'
			})

			.otherwise({ redirectTo: '/' }); 
	})