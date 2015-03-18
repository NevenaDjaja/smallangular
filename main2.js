var MyApp = angular.module('MyApp', []);

MyApp.factory('Friends', function() {
	var Friends = {};

	Friends.nena = [
		{
			name: "Nina",
			job: "student"
		},
		{
			name: "Gaby",
			job: "dev"
		},
		{
			name: "Becca",
			job: "dev"
		}
	];

	return Friends;

});

MyApp.controller('FriendsController', [ '$scope', 'Friends', function($scope, Friends) {
	$scope.friends = Friends.nena;
}]);