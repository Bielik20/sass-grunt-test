module.exports = {
    // Development settings
    dev: {
        files: [{
            expand: true,
            cwd: 'src/scripts',
            src: '**/*.js',
            dest: 'dist/scripts',
            ext: '.min.js'
        }]
    },
    // Production settings
    prod: {
        options: {
            compress: true,
            mangle: true,
            sourceMap: false,
        },
        src: 'src/**/*.js',
        dest: 'dist/scripts/site.min.js'
    }
};