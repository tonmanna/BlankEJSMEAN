define(['../app'], function (app) {
    app.register.factory('sampleService', function ($http,$q) {
        var thisfact = {};
        thisfact.createSample = function(){
            spinner.show();
            var defer = $q.defer();
                $http({
                    method: "GET",
                    url: '/sample/create',
                    contentType: 'application/json; charset=utf-8',
                    dataType: 'json',
                    headers: {
                        'RequestVerificationToken': token
                    }
                }).success(function(data) {
                    spinner.hide();
                    defer.resolve(data);
                }).error(function(data) {
                    spinner.hide();
                    defer.reject(data);
                });
            return defer.promise;
        };

        thisfact.createNewSample = function(obj){
            spinner.show();
            var defer = $q.defer();
            $http({
                method: "POST",
                url: '/sample/createnew',
                contentType: 'application/json; charset=utf-8',
                data: { Name: obj.Name, bCreate: obj.bCreate},
                dataType: 'json',
                headers: {
                    'RequestVerificationToken': token
                }
            }).success(function(data) {
                spinner.hide();
                defer.resolve(data);
            }).error(function(data) {
                spinner.hide();
                defer.reject(data);
            });
            return defer.promise;
        };

        thisfact.readAllSample = function(){
            spinner.show();
            var defer = $q.defer();
                $http(
                {
                    method: 'GET',
                    url: '/sample/read',
                    contentType: 'application/json; charset=utf-8',
                    dataType: 'json',
                    headers: {
                        'RequestVerificationToken': token
                    }
                }).success(function(data) {
                    spinner.hide();
                    defer.resolve(data);
                }).error(function(data) {
                    spinner.hide();
                    defer.reject(data);
                });
            return defer.promise;
        };

        thisfact.deleteSample = function(id){
            spinner.show();
            var defer = $q.defer();
                $http({
                    method: 'GET',
                    url: '/sample/delete/'+id,
                    contentType: 'application/json; charset=utf-8',
                    dataType: 'json',
                    headers: {
                        'RequestVerificationToken': token
                    }
                }).success(function(data) {
                    spinner.hide();
                    defer.resolve(data);
                }).error(function(data) {
                    spinner.hide();
                    defer.reject(data);
                });
            return defer.promise;
        };

        thisfact.readSample = function(id){
            spinner.show();
            var defer = $q.defer();
                $http({
                    method: 'GET',
                    url: '/sample/read/'+id,
                    contentType: 'application/json; charset=utf-8',
                    dataType: 'json',
                    headers: {
                        'RequestVerificationToken': token
                    }
                }).success(function(data) {
                    spinner.hide();
                    defer.resolve(data);
                }).error(function(data) {
                    spinner.hide();
                    defer.reject(data);
                });
            return defer.promise;
        };

        thisfact.updateSample = function(obj,id){
            spinner.show();
            var defer = $q.defer();
                $http({
                    method: "POST",
                    url: '/sample/update/'+id,
                    data: { Name: obj.Name, bCreate: obj.bCreate},
                    contentType: 'application/json; charset=utf-8',
                    dataType: 'json',
                    headers: {
                        'RequestVerificationToken': token
                    }
                }).success(function(data) {
                    spinner.hide();
                    defer.resolve(data);
                }).error(function(data) {
                    spinner.hide();
                    defer.reject(data);
                });
            return defer.promise;
        };

        return thisfact;

    });
});