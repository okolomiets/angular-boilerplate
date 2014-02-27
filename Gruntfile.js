module.exports = function (grunt) {

    grunt.initConfig({
        requirejs: {
            "compile-js": {
                options: {
                    baseUrl: "app",
                    mainConfigFile: "app/js/app.js",
                    name: "js/app",
                    out: "app/js/app.min.js",
                    deps: ["lib/requirejs/require"],
                    insertRequire: ["js/app"]
                }
            },
            "compile-css": {
                options: {
                    cssIn: "app/styles/styles.css",
                    out: "app/styles/styles.min.css"
                }
            }
        },
        bower: {
            install: {}
        }
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-bower-task');

    grunt.registerTask('install', ['bower']);

    grunt.registerTask('build', ['requirejs']);
}