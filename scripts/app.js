angular.module("todoListApp", [])
.controller('mainCtrl', function($scope){
  $scope.helloWorld = function() {
    console.log("Hello there");
  };

  $scope.todos = [
    {"name": "Do this thing"},
    {"name": "Do this other thing"},
    {"name": "Do this stupid thing"},
    {"name": "Do this fun thing"},
    {"name": "Do this boring thing"},
    {"name": "Do this last thing"}
  ];
});
