var app = angular.module('myAPP',[])
    .directive('contenteditable',function () {
        return{
            require:'ngModel',
            link:function (scope,elm,attrs,ctrl) {
                elm.on('blur',function () {
                    ctrl.$setViewValue(elm.html())
                })

                ctrl.$render = function () {
                    elm.html(ctrl.$viewValue)
                }

                ctrl.$setViewValue(elm.html())
            }
        }
    })
