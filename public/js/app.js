var app = angular.module('spotifyApp', []);

app.controller('mainController', function($scope) {
  $scope.loadResults = function(event) {
    event.preventDefault();
    console.log('searched');
  };
})
