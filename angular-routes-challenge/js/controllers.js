angular.module("myFirstAppControllers", [])
	.controller("HomeViewController", function ($scope) {
		$scope.section = "where you can search your favourite artist"
	})

	.controller("AboutViewController", function ($scope) {
		$scope.about = "where you can find more information about your favourite artist"
	
	})

	.controller("ContactViewController", function ($scope) {
		$scope.contact = "put here your name and adress"
	})

