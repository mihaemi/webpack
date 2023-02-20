const path = require('path')
// const { merge } = require('webpack-merge');
// const common = require('./webpack.common.js');
// module.exports = merge(common, {
//     mode: 'production',
//   });
module.exports = {
    // this is actually the configuration webpack uses
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/[name].js',
        publicPath: ''
    }
}