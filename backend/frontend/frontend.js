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



angular.module('PAA', [])
    .config(function ($locationProvider) {
        $locationProvider.html5Mode(true)
    })
    .controller('indexCtrl', function ($scope) {
        $scope.appTitle = 'Pet Appointment App'
        $scope.name = 'Demo';
    });
