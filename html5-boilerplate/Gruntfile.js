var DEV = 1;
var PROD = 2;
module.exports = function (grunt) {

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
    require('load-grunt-tasks')(grunt);

    grunt.config("ENV", process.argv[3] === "prod" ? PROD : DEV);

    console.log(process.argv);
    console.log("Environment", grunt.config("ENV"));

    // Project configuration.
    grunt.initConfig({
        clean: ["dist"],
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            dist: {
                options: {
                    transform: ["babelify"]
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
        }
    });

    grunt.registerTask("build", ["clean", "browserify", "uglify"]);
    // grunt.registerTask("minify", ["uglify"]);
};
