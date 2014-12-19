/**
 * Configuration for pngmin task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('autoprefixer', {
        server: {
            options: {
                browsers: ['last 2 versions', 'ie 9'],
                map: true
            },
            files: [{
                expand: true,
                flatten: true,
                src: '<%= yeogurt.staticServer %>/styles/*.css',
                dest: '<%= yeogurt.staticServer %>/styles/'
            }]
        },
        dist: {
            options: {
                browsers: ['last 2 versions', 'ie 9'],
                map: true
            },
            files: [{
                expand: true,
                flatten: true,
                src: '<%= yeogurt.dist %>/styles/*.css',
                dest: '<%= yeogurt.dist %>/styles/'
            }]
        }
    });

};

module.exports = taskConfig;