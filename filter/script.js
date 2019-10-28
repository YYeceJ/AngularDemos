angular.module('myStatefulFilterApp',[])
.filter('reverse',function () {
    return function (input,uppercase) {
        input = input || '';
        var out = '';
        for (var i = 0 ; i < input.length ; i ++){
            out = input.charAt(i) + out
        }
        if (uppercase){
            out = out.toUpperCase();
        }
        return out
    }
})

.controller('MyCtrl',['$scope','reverseFilter',function ($scope,reverseFilter) {
    $scope.greeting = 'hello'
    $scope.filteredGreeting = reverseFilter($scope.greeting)
}])

.controller('filterCtrl',['$scope',function ($scope) {
    $scope.childArr = [
        {name:'kimi',age:3},
        {name:'cindy',age:4},
        {name:'anglar',age:4},
        {name:'shitou',age:6},
        {name:'tiantian',age:5}
    ];
    $scope.func = function (e) {
        return e.age > 4
    }
}])
