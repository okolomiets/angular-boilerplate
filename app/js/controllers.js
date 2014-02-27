define(function (require, exports, module) {
    var angular = require('angular');
    return{
        GlobalCtrl: ['$rootScope',  function ($rootScope) {
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

        }],
        MainCtrl: ['$scope', 'mainSrv', function ($scope, mainSrv) {
            mainSrv.request().success(function (response) {
            });
        }]
    };
});