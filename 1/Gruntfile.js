module.exports = function(grunt){

  grunt.loadNpmTasks('grunt-styleguide');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.initConfig({
    styleguide: {
      styledocco: {
        options: {
          name: 'Project Name',
          framework: {
            name: 'styledocco',
            options: {
              preprocessor: 'sass'
            }
          },
          template: {
            include: [
              '_previews.js'
            ]
          }
        },
        src: [
          'css/src/*.scss'
        ],
        dest: 'docs'
      }
    },
    clean: {
      styleguide: [
        '<%= styleguide.styledocco.dest %>'
      ]
    }
  });

  grunt.registerTask('default', [
    'clean',
    'styleguide'
  ]);

};
