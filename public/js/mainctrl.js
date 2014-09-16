define(['app','mainservice'], function (app) {
    app.register.controller('MainCtrl', function ($scope, $location, $aside, MainService) {
            MainService.GetSample().then(function(data) {
                $scope.test = data;
            });



    });
});