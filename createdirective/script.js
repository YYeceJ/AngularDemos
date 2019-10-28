var app = angular.module('myApp',[])
app.controller('customCtrl',['$scope',function ($scope) {
    $scope.naomi = {name:'naomo',address:'ko ko da yo'}
    $scope.igor = {name:'igor',address:'a no hi'}
}])

app.directive('myCustomer',function () {
    return{
        restrict:'E',
        scope:{
            customerInfo : '=info'
        },
        templateUrl : 'my-custom.html'
    }
})