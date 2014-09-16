define(['app'], function (app) {
    app.register.factory('MainService', function ($http,$q) {
        var thisfact = {};

        thisfact.GetSample = function(){
            var defer = $q.defer();
            $http({method: 'GET', url: '/sample'}).
                success(function(data, status, headers, config) {
                    defer.resolve(data);
                }).
                error(function(data, status, headers, config) {
                    defer.reject(data);
                });
            return defer.promise;
        };

        return thisfact;

    });
});