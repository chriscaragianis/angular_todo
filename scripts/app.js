angular.module("todoListApp", [])
.controller('mainCtrl', function($scope, dataService){

  $scope.addTodo = function() {
    var todo = {name: "A new todo"};
    $scope.todos.push(todo);
  };
  $scope.helloWorld = function() {
    console.log("Hello there");
  };

  $scope.todos = dataService.getTodos();

  dataService.getTodos(function(response) {
    console.log(response.data);
    $scope.todos = response.data;
  });

  $scope.deleteTodo = function(todo, index) {
    dataService.deleteTodo(todo);
    $scope.todos.splice(index, 1);
  };

  $scope.saveTodo = function(todo, index) {
    dataService.saveTodo(todo);
  };

})
.service('dataService', function($http) {
  this.helloConsole = function() {
    console.log("LOG THIS service guy");
  };

  this.getTodos = function(callback) {
    $http.get('mock/todos.json')
      .then(callback);
  };

  this.deleteTodo = function(todo) {
    console.log("the " + todo.name + " todo has been deleted");
  };

  this.saveTodo = function(todo) {
    console.log("the " + todo.name + " todo has been saved");
  };
});


