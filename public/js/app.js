var app = angular.module('spotifyApp', []);

app.controller('mainController', function($scope, $http) {

  $scope.loadResults = function(event) {
    event.preventDefault();
    // console.log('searched');
    $http.get('https://api.spotify.com/v1/albums/' + $scope.search).success(function(response) {
      console.log(response);
    });
  };


})
