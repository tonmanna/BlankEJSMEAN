require.config({
    baseUrl: "js",
    waitSeconds : 90,
    paths: {
        'angular': '/components/angular/angular',
        'angular-route': '/components/angular-route/angular-route.min',
        'angular-resource' : '/components/angular-resource/angular-resource.min',
        'angular-animate' : '/components/angular-animate/angular-animate.min',
        'angular-sanitize' : '/components/angular-sanitize/angular-sanitize.min',
        'angular-strap' : '/components/angular-strap/dist/angular-strap',
        'angular-strap-tpl' : '/components/angular-strap/dist/angular-strap.tpl.min',
        'angularAMD': '/components/angularAMD/angularAMD.min',
        'ngload': '/components/angularAMD/ngload.min',
        'bootstrap': '/components/bootstrap/dist/js/bootstrap.min',
        'jquery':  '/components/jquery/dist/jquery.min',
        'toastr':  '/components/toastr/toastr.min'
    },
    shim: {
        'angularAMD': ['angular'],
        'angular-route' : ['angular'],
        'angular-resource' : ['angular'],
        'angular-sanitize' : ['angular'],
        'angular-animate' : ['angular'],
        'angular-strap' : ['angular'],
        'angular-strap-tpl' : ['angular','angular-strap'],
        'ngload': ['angularAMD']
    },
    deps: ['app'],
    urlArgs: "bust=v0.01"
});