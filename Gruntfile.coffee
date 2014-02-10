#global module

module.exports = (grunt) ->
  "use strict"

  grunt.loadNpmTasks "grunt-sass"
  grunt.loadNpmTasks "grunt-contrib-cssmin"
  grunt.loadNpmTasks "grunt-contrib-jshint"
  grunt.loadNpmTasks "grunt-contrib-uglify"
  grunt.loadNpmTasks "grunt-shell"
  grunt.loadNpmTasks "grunt-coffeelint"

  # Project configuration.
  grunt.initConfig
    pkg: grunt.file.readJSON("package.json")

    meta: {
      banner: "/****************************************************************************************\n" +
              " * Version <%= pkg.version %>\n" +
              " *\n" +
              " * Copyright <%= grunt.template.today(\"yyyy\") %> Josh Finnie\n" +
              " * Licensed under the Attribution-NonCommercial-ShareAlike 3.0 Unported (CC BY-NC-SA 3.0)\n" +
              " * http://creativecommons.org/licenses/by-nc-sa/3.0/\n" +
              " ****************************************************************************************/"
    }

    sass:
      dist:
        files:
          "_source/_assets/css/main.css": "_source/_assets/css/_scss/style.scss"

    cssmin:
      options:
        banner: "<%= meta.banner %>"
      minify:
        expand: true
        cwd: "_source/_assets/css"
        src: ["*.css", "!*.min.css"]
        dest: "_source/_assets/css"
        ext: ".min.css"
    
    jshint:
      options:
        jshintrc: true
      all: ["_source/_assets/js/main.js"]

    coffeelint:
      options:
        configFile: "coffeelint.json"
      files: ["Gruntfile.coffee"]

    uglify:
      options:
        banner: "<%= meta.banner %>"
      myTarget:
        files:
          "_source/_assets/js/main.min.js": ["_source/_assets/js/main.js"]

    shell:
      generate:
        command: "mynt gen -c _source/ _site/"
        options:
          stdout: true
          etderr: true
      serve:
        options:
          stdout: true
          etderr: true
        command: "mynt serve _site/"
      deploy:
        options:
          stdout: true
          etderr: true
        command: "s3cmd sync --add-header=\"Cache-Control: max-age=31536000\" _site/ s3://www.joshfinnie.com"

  grunt.registerTask "default", ["sass", "cssmin", "jshint", "coffeelint", "uglify"]
  grunt.registerTask "gen", ["default", "shell:generate"]
  grunt.registerTask "serve", ["gen", "shell:serve"]
  grunt.registerTask "deploy", ["shell:deploy"]