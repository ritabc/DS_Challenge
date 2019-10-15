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
        .otherwise({ redirect: '/' })
    $locationProvider.html5Mode({
        enabled: false,
        requireBase: false
    })
});
app.controller('PaaController', function ($scope) {
});
app.controller('ApptsListController', function ($scope, $http) {
    $scope.appointments = [];
    $http.get('/appointments').then(function (res) {
        res.data.forEach(function (obj) {
            $scope.appointments.push(obj);
        })
    })
})
app.controller('ApptsNewController', function ($scope, $http) {
    $scope.appointment = {};
    $scope.submitForm = function () {
        let postData = angular.toJson($scope.appointment, true)
        $http.post("#!/appointments/create", postData)
            .then(function (res) {
                console.log(res)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

})

