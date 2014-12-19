/**
 * Builds out an optimised site through minification of CSS and HTML, as well as  uglification and optimisation of Javascript.
 */
'use strict';

var taskConfig = function(grunt) {
    grunt.registerTask('test', 'Peform tests on JavaScript', function(target) {

        grunt.task.run([
            'jshint:test',
        ]);
    });
};

module.exports = taskConfig;
