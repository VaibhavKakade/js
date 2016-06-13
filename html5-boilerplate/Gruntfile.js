/*var babelify = require("babelify");
var browserify = require("browserify");*/

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        uglify: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: "scripts",
                    src: "**/*.js",
                    dest: "app.js"
                }]
            }
        }
    });
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks("grunt-contrib-uglify");

    // Default task(s).
    grunt.registerTask("build", function () {
        console.log("build");
        // browserify().transform(babelify, {presets: ["es2015", "react"]});

        var fs = require("fs");
        var browserify = require("browserify");

        browserify().transform("babelify", {
            presets: ["es2015"],
            only: "scripts"
        }).bundle().pipe(fs.createWriteStream("bundle.js"));
    });
    grunt.registerTask("minify", ["uglify"]);

};
