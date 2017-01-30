module.exports = {

    options: {
        spawn: false,
        livereload: true
    },

    scripts: {
        files: [
            'src/scripts/*.js'
        ],
        tasks: [
            'jshint',
            'uglify:dev'
        ]
    },

    styles: {
        files: [
            'src/styles/*.scss'
        ],
        tasks: [
            'sass:dev'
        ]
    },
};