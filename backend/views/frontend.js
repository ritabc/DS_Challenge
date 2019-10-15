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

app = angular.module('PAA', ['ngRoute']);
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/main.ejs',
            controller: 'PaaController'
        })
        .when('/appointments', {
            templateUrl: 'partials/apptsList.ejs',
            controller: 'ApptsListController'
        })
        .when('/appointments/create', {
            templateUrl: 'partials/apptsNew.ejs',
            controller: 'ApptsNewController'
        })
    // $locationProvider.hashPrefix('')
    $locationProvider.html5Mode({
        enabled: false,
        requireBase: false
    })
});
app.controller('PaaController', function ($scope) {
});
// app.controller('ApptsListController', function ($scope) {
//     let $ctrl = $scope
//     $ctrl.appointments = function ($http) {
//         $ctrl.appointments = [];
//         $http.get('/appointments').then(function (res) {
//             res.data.forEach(function (obj) {
//                 $ctrl.appointments.push(obj);
//             })
//         })
//     }
// })
app.controller('ApptsListController', function ($scope, $http) {
    $scope.appointments = [];
    $http.get('/appointments').then(function (res) {
        res.data.forEach(function (obj) {
            $scope.appointments.push(obj);
            // console.log(res)
        })
    })
})
app.controller('ApptsNewController', function ($scope) {
    $http.post('/create')

})

