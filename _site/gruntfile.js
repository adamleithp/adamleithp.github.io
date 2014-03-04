module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          'assets/styles/app.css': 'assets/styles/app.scss',       // 'destination': 'source'
        }
      }
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['assets/js/app.js'],
        dest: 'assets/js/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'assets/js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    // jshint: {
    //   files: ['Gruntfile.js', 'assets/js/*.js', 'assets/js/*.js'],

    //   options: {
    //     // options here to override JSHint defaults
    //     globals: {
    //       jQuery: false,
    //       console: true,
    //       module: true,
    //       document: true
    //     }
    //   }
    // },
    watch: {
      js: {
        files: ['assets/js/*.js'],
        tasks: ['concat', 'uglify'],
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
  // grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // grunt.registerTask('test', ['jshint']);

  grunt.registerTask('default', ['concat', 'uglify', 'sass']);

};