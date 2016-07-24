angular.module("moviesControllers", [])
	.controller("popularmoviesController", function ($scope) {
		$scope.section = "where you can search your favourite artist"
	})

	.controller("upcomingmoviesController", function ($scope) {
		$scope.about = "where you can find more information about your favourite artist"
	
	})

	.controller("nowplayingmovies", function ($scope) {
		$scope.contact = "put here your name and adress"
	})

	.controller("topratedmoviesController", function ($scope) {
		$scope.contact = "put here your name and adress"
	})

