var app = {};
define(['angularAMD','angular-route', 'angular-resource', 'angular-sanitize', 'angular-animate', 'angular-strap', 'angular-strap-tpl'],
    function (angularAMD) {
    app = angular.module("MainApp", ['ngRoute', 'ngSanitize', 'ngResource', 'ngAnimate', 'mgcrea.ngStrap']);
    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.when("/", angularAMD.route({
            templateUrl: '/views/index.html', controller: 'mainCtrl',
            controllerUrl: './main/controller',
            resolve: {
//                ComponentLoad: function () {
//                }
            }
        }))
            .when("/sample", angularAMD.route({
                templateUrl: '/views/sample/sample.html', controller: 'sampleCtrl',
                controllerUrl: './sample/controller',
                resolve: {
//                ComponentLoad: function () {
//                }
                }
            })).otherwise({
                redirectTo: "/"
            });
        $locationProvider.html5Mode(false).hashPrefix('!');
    }]);
    requirejs(["config","controller", "directive", "filter"], function () {
        angularAMD.bootstrap(app);
    });
    return app;
});