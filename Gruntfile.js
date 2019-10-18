module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {                              // Task
      dist: {                            // Target
        files: [{
          expand: true,
          cwd: 'scss',
          src: ['*.scss','**/*.scss'],
          dest: 'css',
          ext: '.css'
        }]
      }
    },
    autoprefixer: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      dist: {
        expand: true,
        cwd: 'css',
        src: [ '*.css' ],
        dest: 'css'
      }
   },
   watch: {
    js: {
      files: ['src/*.js'],
      tasks: ['compileJS'],
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        livereload: true,
      }
    },
    scss: {
      files: ['**/*.scss'],
      tasks: ['compileCSS'],
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        livereload: true,
      }
    },
    html: {
      files: ['*.html'],
      options: {
        livereload: true,
      }
    },
   },
   compass: {                  // Task
     dist: {                   // Target
       options: {              // Target options
         sassDir: 'scss',
         cssDir: 'css',
         environment: 'production'
       }
     }
   },
   browserify: {
     development: {
       src: [
        "src/*.js"
       ],
       dest: 'js/general.js',
       options: {
         browserifyOptions: { debug: true },
         transform: [["babelify", { "presets": ["es2015"] }]]
       }
     },
     production: {
       src: [
        "src/*.js"
       ],
       dest: 'js/general.min.js',
       options: {
            browserifyOptions: { debug: false },
            transform: [["babelify", { "presets": ["es2015"] }]],
            plugin: [
              ["minifyify", { map: false }]
            ]
        }
     }
   },
    concurrent: {
      target: {
          tasks: ['connect','watch'],
          options: {
              logConcurrentOutput: true
          }
      }
    },
    connect: {
      keepalive: {
        options: {
          port: 80,
          host: '0.0.0.0',
          keepalive:true,
          open:"http://mano/index.html"
        }
      }
    },
    clean: {
      exit: ['css', '.sass-cache','js'],
      css: ['css/*.css','css/modules', '!css/*.min.css'],
      js: ['!js/general.js', '!js/*.min.js']
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*.css', '!*.min.css'],
          dest: 'css',
          ext: '.min.css'
        }]
      }
    }
  });



  require('load-grunt-tasks')(grunt);

  // Default task(s).
  grunt.registerTask('default', ['compileJS','compileCSS','concurrent']);
  grunt.registerTask(
    'compileJS',
    'Kompiliuojam JS.',
    ['browserify:production','clean:js']
  );
  grunt.registerTask(
    'compileCSS',
    'Kompiliuojam laikinus failus.',
    ['compass','autoprefixer','cssmin','clean:css']
  );

  // Deploy
  grunt.registerTask('build', ['compileJS_build','compileCSS']);
  grunt.registerTask(
    'compileJS_build',
    'Kompiliuojam JS.',
    ['browserify:production','clean:js']
  );

};
