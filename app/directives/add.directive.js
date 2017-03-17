app.directive('add', function(){
    return {
        restrict: 'EA',
        template: 'Add 10$',
        require: 'ngModel',
        link: function(scope, elem, attrs, ngModel){
            elem.on('click', function(){
                ngModel.$setViewValue(ngModel.$viewValue + 10)
                scope.$apply();
            })        
        }
    }
})