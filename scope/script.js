var app = angular.module('myApp',[])
app.controller('nameCtrl',[
    '$scope','$rootScope',function ($scope,$rootScope) {
        $rootScope.greeting = 'Hello'
        $scope.names = ['Igor', 'Misko', 'Vojta']
    }
])
