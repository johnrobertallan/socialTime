module.exports = function(grunt) {
    
    //Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bookmarklet: {
            generate: {
                body: '<%= pkg.name %>.min.js',
                out: '<%= pkg.name %>.bookmarklet.js'
            }
        }
    });
    
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-bookmarklet-thingy');

    grunt.registerTask('default', ['bookmarklet']);
};