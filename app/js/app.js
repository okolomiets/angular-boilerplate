require.config({
    baseUrl: 'app',
    paths: {
        'jquery': 'lib/jquery/dist/jquery',
        'angular': 'lib/angular/angular',
        'text': 'lib/requirejs-text/text'
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        },
        'angular': {
            exports: 'angular',
            'deps': ['jquery']
        },
        'lib/angular-route/angular-route': {
            'deps': ['angular']
        }
    },
    config: {
        'js/services': {
            apiUrl: 'http://localhost/api'
        }
    }
});

define(function (require, exports, module) {
    require('lib/angular-route/angular-route');

    var angular = require('angular'),
        controllers = require('js/controllers'),
        services = require('js/services'),
        directives = require('js/directives'),
        filters = require('js/filters');

    var app = angular.module('boilerplate', ['ngRoute'], ['$provide', '$routeProvider', '$httpProvider', function ($provide, $routeProvider, $httpProvider) {
        $routeProvider
            .when('/', {
                controller: controllers.MainCtrl,
                template: require('text!templates/main.html')
            });

        $httpProvider.interceptors.push(['$q', function ($q) {
            return {
                'request': function (config) {
                    return config;
                },
                'response': function (response) {
                    return response;

                },
                'responseError': function (rejection) {
                    return $q.reject(rejection);
                }

            }
        }]);

        angular.forEach(services, function (service, name) {
            $provide.factory(name, service);
        });
    }]);

    angular.forEach(directives, function (directive, name) {
        app.directive(name, directive);
    });

    angular.forEach(filters, function (filter, name) {
        app.filter(name, filter);
    });

    angular.forEach(controllers, function (controller, name) {
        app.controller(name, controller);
    });

    app.run(['$rootScope',  function ($rootScope) {
        $rootScope.$safeApply = function (fn) {
            var phase = this.$root.$$phase;
            if (phase == '$apply' || phase == '$digest') {
                if (fn && (typeof(fn) === 'function')) {
                    fn();
                }
            } else {
                this.$apply(fn);
            }
        };

    }]);

    angular.bootstrap(document, ['boilerplate']);
});