var app =  angular.module('App', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        $stateProvider
            .state('root', {
                abstract: true,
                views: {
                    'nav': {
                        templateUrl: 'app/templates/nav.html'
                    },
                    'index': {
                        template: '<div ui-view=""></div>'
                    },
                    'footer': {
                        templateUrl: 'app/templates/footer.html'
                    }
                }
            })
            .state('home', {
                url: '/home',
                templateUrl: 'index.html',
                parent: 'root'
            })
            .state('about', {
                url: '/about',
                parent: 'root',
                views: {
                    '': {
                        templateUrl: 'app/templates/about.html',
                    },
                    'about1': {
                        
                        templateUrl: 'app/templates/about1.html'
                    },
                    'about2': {
                       
                        templateUrl: 'app/templates/about2.html'
                    }

                }
            })
            .state('directives', {
                url: '/directives',
                templateUrl: 'app/templates/directives.html',
                parent: 'root'
            })
            .state('components', {
                url: '/components',
                templateUrl: 'app/templates/components.html',
                parent: 'root'
            })

}]);

