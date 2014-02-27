define(function (require, exports, module) {
    var $ = require('jquery');
    return{
        mainDir: [function () {
            return{
                restrict: 'E',
                scope: {
                    text: '@'
                },
                replace: true,
                template: '<p>{{text|case:true}}</p>'
            }
        }]
    }
});