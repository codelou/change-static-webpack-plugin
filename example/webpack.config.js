const ChangeStaticWebpackPlugin = require('../index.js');

module.exports = {
    mode: 'development',
    devtool:'source-map',
    entry: './test.js',
    output: {
        path:__dirname + '/dist',
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    plugins: [
        new ChangeStaticWebpackPlugin()
    ]
}