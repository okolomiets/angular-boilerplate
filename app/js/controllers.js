define(function (require, exports, module) {
    var angular = require('angular');
    return{
        MainCtrl: ['$scope', 'mainSrv', function ($scope, mainSrv) {
            mainSrv.request().success(function (response) {
                alert('Api working!');
            }).error(function (err) {
                    alert('Api not working!');
                });
        }]
    };
});