var employeeApp = angular.module('employeeApp', ['ngRoute']);

employeeApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/home', {
        templateUrl: 'views/home.html'
    }).when('/viewEmployee', {
        templateUrl: 'views/viewEmployee.html',
        controller: 'ViewController'
    }).otherwise({
        redirectTo: '/home'
    })


}]);


employeeApp.controller('ViewController', ['$scope','$http', function($scope, $http){
        $http({
            method: 'GET',
            url : 'https://erick1259.pythonanywhere.com/api/employee/GetAllEmployee'
        }).then(function(response){
            $scope.employees = response.data;
        })

}]);