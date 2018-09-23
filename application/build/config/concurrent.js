module.exports = {
    initialize: {
        options: {
            logConcurrentOutput: true
        },
        tasks: ['build-data', 'build-partials', 'build-styles']
    },
    compile: {
        options: {
            logConcurrentOutput: true
        },
        tasks: [
            'postcss'
            // 'uglify'
        ]
    }
};
