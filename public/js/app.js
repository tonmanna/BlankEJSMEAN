var app = {};
define(['angularAMD','jquery', 'angular-route', 'angular-resource', 'angular-sanitize', 'angular-animate', 'angular-strap', 'angular-strap-tpl']
    , function (angularAMD,$) {
        app = angular.module("MainApp", ['ngRoute','ngSanitize','ngResource','ngAnimate','mgcrea.ngStrap']);
        app.config(['$routeProvider', '$locationProvider',function ($routeProvider,$locationProvider) {
            $routeProvider.when("/", angularAMD.route({
                templateUrl: '/views/index.html', controller: 'MainCtrl',
                controllerUrl: 'mainctrl',
                resolve: {
//                ComponentLoad: function () {
//                }
                }
            }))
            .when("/sample", angularAMD.route({
                templateUrl: '/views/sample.html', controller: 'MainCtrl',
                controllerUrl: 'mainctrl',
                resolve: {
//                ComponentLoad: function () {
//                }
                }
            })).otherwise({
                redirectTo : "/"
            });
            $locationProvider.html5Mode(false).hashPrefix('!');
        }]);

        app.controller("GlobalCtrl",function($scope,$location){
            $scope.CurrentPage = $location.path().replace("/","");
        });

        requirejs(["directive","filter"],function(){
            angularAMD.bootstrap(app);
        });

        return app;
    });