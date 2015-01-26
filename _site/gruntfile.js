module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    sass: {                              // Task
      dist: {                            // Target
        options: {
          style: 'compressed'
        },
        files: {                         // Dictionary of files
          'assets/styles/app.css': 'assets/styles/app.scss',       // 'destination': 'source'
        }
      }
    },
    uglify: {
      options: {
        banner: '/*! Jekyll Template <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'assets/js/app.min.js': ['assets/js/app.js']
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js'],

      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      options: {
        atBegin: true,
      },
      js: {
        files: ['assets/js/*.js'],
        tasks: ['jshint', 'uglify'],
        options: {
          livereload: true,
        }
      },
      sass: {
        // We watch and compile sass files as normal but don't live reload here
        files: ['assets/styles/*.scss','assets/styles/*/*.scss'],
        tasks: ['sass'],
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('prod', ['uglify', 'sass',]);


};

