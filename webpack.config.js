var path = require('path');
var webpack = require('webpack');

module.exports = function(env) {
    return {
        entry: {
            main: './app/index.js',
            vendor: ['moment','lodash']
        },
        output: {
            filename: '[name].[chunkhash].js',
            path: path.resolve(__dirname, 'dist')
        },
        //plugins for code splitting
         plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor' // Specify the common bundle's name.
            })
        ]
    }
}