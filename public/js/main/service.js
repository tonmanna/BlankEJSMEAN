define(['../app'], function (app) {
    app.register.factory('mainService', function ($http,$q) {
        var thisfact = {};
        thisfact.GetSample = function(){
            spinner.show();
            var defer = $q.defer();
            $http({method: 'GET', url: '/sample'}).
                success(function(data) {
                    spinner.hide();
                    defer.resolve(data);
                }).
                error(function(err) {
                    spinner.hide();
                    defer.reject(err);
                });
            return defer.promise;
        };

        return thisfact;

    });
});