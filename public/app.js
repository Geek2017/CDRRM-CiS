// Application Modules and Routing
angular
    .module('newApp', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/dashboard.html',
                controller: "dashboardCtrl"
            })
            .when('/rhalist', {
                templateUrl: 'views/rhalist.html',
                controller: "rhalistCtrl"
            })
            .when('/rhanew', {
                templateUrl: 'views/rhanew.html',
                controller: "rhanewCtrl"
            })
            .when('/cflist', {
                templateUrl: 'views/cflist.html',
                controller: "cflistCtrl"
            })
            .when('/cfnew', {
                templateUrl: 'views/cfnew.html',
                controller: "cfnewCtrl"
            })
            .when('/crlist', {
                templateUrl: 'views/crlist.html',
                controller: "crlistCtrl"
            })
            .when('/crnew', {
                templateUrl: 'views/crnew.html',
                controller: "crnewCtrl"
            })
            .when('/cdlist', {
                templateUrl: 'views/cdlist.html',
                controller: "cdlistCtrl"
            })
            .when('/cdnew', {
                templateUrl: 'views/cdnew.html',
                controller: "cdnewCtrl"
            });


    });