module.exports = {

    // Task options
    options: {
        limit: 3
    },

    // Dev tasks
    devFirst: [
        'clean',
        'jshint'
    ],
    devSecond: [
        'sass:dev',
        'uglify:dev'
    ],

    // Production tasks
    prodFirst: [
        'clean',
        'jshint'
    ],
    prodSecond: [
        'sass:prod',
        'uglify:prod'
    ],

    // Image tasks
    imgFirst: [
        'imagemin'
    ]
};