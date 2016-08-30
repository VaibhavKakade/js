module.exports = function (grunt) {

    // TODO :-
    // 1] add plugin for css minification [done]
    // 2] add plugins for copying the assets

    /*
        This module will read the dependencies/devDependencies/peerDependencies/optionalDependencies in your package.json and load grunt tasks that match the provided patterns.

        BEFORE
        grunt.loadNpmTasks('grunt-recess');
        grunt.loadNpmTasks('grunt-sizediff');
        grunt.loadNpmTasks('grunt-svgmin');
        grunt.loadNpmTasks('grunt-styl');
        grunt.loadNpmTasks('grunt-php');
        grunt.loadNpmTasks('grunt-eslint');
        grunt.loadNpmTasks('grunt-concurrent');
        grunt.loadNpmTasks('grunt-bower-requirejs');

        AFTER
        require('load-grunt-tasks')(grunt);

    */
    require("load-grunt-tasks")(grunt);

    // Project configuration.
    grunt.initConfig({
        config: {
            cssPath: "app/assets/css",
            imagePath: "app/assets/images",
            assetsPath: "app/assets"
        },
        clean: ["dist"],
        // pkg: grunt.file.readJSON('package.json'),
        browserify: {
            dist: {
                options: {
                    transform: ["babelify", "react"]
                },
                files: {
                    // if the source file has an extension of es6 then
                    // we change the name of the source file accordingly.
                    // The result file's extension is always .js
                    "dist/app.min.js": ["./app/scripts/**/*.js"]
                }
            }
        },
        uglify: {
            dist: {
                files: {
                    "dist/app.min.js": "dist/app.min.js"
                }
            }
        },
        /*copy: {
            copyIndex: {
                src: "index.html",
                dest: "dist/index.html"
            },
            copyAssets: {
                src: "app/assets/**",
                dest: "dist/assets/"
            }
        },*/
        targethtml: {
            prod: {
                files: {
                    "dist/index.html": "index.html"
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    "dist/main.min.css": ["<%=config.cssPath%>/**/*.css", "!<%=config.cssPath%>/**/*.min.css"]
                }
            }
        },
        eslint: {
            src: ["app/main.js", "app/scripts/**/*.js"],
            options: {
                config: ".eslintrc.json",
                rules: ".eslintrc"
            }
        }
    });

    grunt.registerTask("build", ["clean", "browserify", "uglify", "cssmin", "targethtml:prod"]);

    grunt.registerTask("lint-code", ["eslint"]);

    grunt.registerTask("lint", function() {
        var CLIEngine = require("eslint").CLIEngine;
        var cli = new CLIEngine({
            envs: ["browser", "es6"]
        });
        var report = cli.executeOnFiles(["app/main.js", "app/scripts/**/*.js"]);
        var errorReport = CLIEngine.getErrorResults(report.results);
        console.log("Found error in "+errorReport.length+" files...");
        errorReport.forEach(function(error){
            console.log("errors :- "+error.errorCount+", warnings:- "+error.warningCount+", " +error.filePath);
            error.messages.forEach(function(m) {
                console.log("["+m.line +","+ m.column+"] " + m.message);
            });
        });

        return !errorReport.length;
    });
};
