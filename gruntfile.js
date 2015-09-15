module.exports = function(grunt) {
	//Configure task(s)
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch : {
			css: {
				files: ['src/scss/main.scss'],
				tasks: ['sass:dev']
			},
		},
		sass: {
			dev: {
				options: {
					outputStyle: 'expanded'
				},
				files: {
					'dist/css/main.css' : 'src/scss/main.scss'
				}
			},
			dist: {
				options: {
					outputStyle: 'compressed'
				},
				files: {
					'dist/css/main.css' : 'src/scss/main.scss'
				}
			},
		},
	});

	//Load the plugins
	grunt.loadNpmTasks ('grunt-contrib-watch' );
	grunt.loadNpmTasks ('grunt-sass' );

	//Register task(s).
	grunt.registerTask('default', ['sass:dev']);
	grunt.registerTask('dist', ['sass:dist']);
};