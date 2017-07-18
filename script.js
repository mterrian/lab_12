var app = angular.module('demo',[]);

app.controller('demoCtrl', function($scope){

	//$scope.food = ['pinapple','pizza','kale','pies'];

	$scope.todos = ["eat pizza"];

	//$scope.placeHolder = "enter a task here"

	$scope.getTodo = function(to){
		$scope.todos.push(to);
		$scope.todo = "";
	};

	$scope.remove = function(todo) { 
  		var index = $scope.todos.indexOf(todo);
 	 	 $scope.todos.splice(index, 1);     
	};
});
