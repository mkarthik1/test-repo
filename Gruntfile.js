module.exports = function(grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

      grunt.initConfig({
        uglify: {
          dist: {
            src: 'assets/js/vendor/**/*.js',
            dest: "assets/js/vendor.min.js"
          }
        },
        sass: {
          options: {
            style: "expanded",
            lineNumbers: true
          },
          dist: {
            files: { 'assets/styles/app.css': 'assets/styles/app.scss' }
          }
        },
        watch: {
          scripts: {
            files: ['assets/js/**/*.js', '!assets/js/vendor.min.js'],
            tasks: ['uglify'],
            options: {
                spawn: false,
            },
          },
          css: {
            files: ['assets/styles/**/*.scss'],
            tasks: ['sass'],
            options: {
                spawn: false,
            }
          }
        }
      });

      grunt.registerTask('default', ['uglify', 'sass']);
    };