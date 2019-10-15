//Frontend code.
// let app = angular.module('PAA', ['ngRoute'])
//     .config(function ($routeProvider, $locationProvider) {
//         $routeProvider.
//             when('/', {
//                 templateUrl: 'index.html',
//                 controller: 'PaaController'
//             })
//         // .otherwise({
//         //     template: '404'
//         // });
//         $locationProvider.html5Mode(true)
//     });



angular.module('PAA', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'index.ejs',
                controller: 'PaaController'
            })
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        })
    })
    .controller('PaaController', function ($scope) {
        $scope.appTitle = 'Pet Appointment App';
    });
