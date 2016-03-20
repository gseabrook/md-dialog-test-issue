module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        
        karma: {
            options: {
                configFile: 'karma.conf.js'
            },
            unit: {
                singleRun: true
            },

            continuous: {
                singleRun: false,
                autoWatch: true
            }
        }
    });

    grunt.registerTask('default', ['karma:unit']);
    grunt.loadNpmTasks('grunt-karma');
};
