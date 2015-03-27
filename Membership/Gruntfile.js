/**
 * Created by Sandra on 3/26/2015.
 */
'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        jshint : {                                              // assigns files for jshint to check
            files : ['lib/**/*js',
                     'models/**/*.js'
                    ]
        },

        watch : {
            files : ['lib/**/*js',
                'models/**/*.js'
                    ],
            tasks : ['jshint']
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");                 // creates jshint task for grunt to run - [ grunt jshint ]
    grunt.loadNpmTasks("grunt-contrib-watch");                 // creates watch task for grunt to run - [ grunt watch ]
}