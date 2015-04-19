define(['../app','./service'], function (app) {
    app.register.controller('mainCtrl', function ($scope,mainService) {
        $scope.activePage = 1; // Home
        $scope.initMT = function() {
            mainService.GetSample().then(function (data) {
                $scope.testData = data;
            });
        }
    });
});