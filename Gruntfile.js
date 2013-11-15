module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      my_target: {
        files: {
          'js/scripts.js': ['js/plugins.js', 'js/main.js']
        }
      }
    },

    compass: {
      dist: {
        options: {
          sassDir: 'sass',
          cssDir: 'css',
          environment: 'production'
        }
      }
    },

    watch: {
      css: {
        files: 'sass/styles.scss',
        tasks: ['sass','reload'],
        options: {
          livereload: true,
        },
      },
      scripts: {
        files: ['js/scripts.js'],
        options: {
          livereload: true,
        },
      },
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-reload');

  grunt.registerTask('default', ['uglify','compass','watch']);

};