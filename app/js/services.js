define(function (require, exports, module) {

    var apiUrl = module.config().apiUrl;
    return {
        mainSrv: ['$http', function ($http) {
            return {
                request: function () {
                    return $http.get(apiUrl);
                }
            }
        }]
    }
});