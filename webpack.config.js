const HELP = require('./config/helpers');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
    filename: "app.css"
});
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DllBundlesPlugin = require('webpack-dll-bundles-plugin').DllBundlesPlugin;

module.exports = {
    entry: HELP.SRC,
    output: {
        filename: HELP.OUTPUT_FILENAME,
        path: HELP.DIST_FOLDER
    },
    devServer: {
        contentBase: HELP.DIST_FOLDER,
        port: HELP.PORT
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [
                        { loader: "css-loader"  }, 
                        { loader: "sass-loader" }
                    ],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.html$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'raw-loader'
            }
        ],
    },
    resolve: {
        extensions: [".js", "scss", "html"]
    },
    plugins: [
        extractSass,
        new HtmlWebpackPlugin({
            title: 'demo',
            template: HELP.INDEX_TEMPLATE
        }),

      new DllBundlesPlugin({
        bundles: {
          vendor: [
            '@angular/platform-browser',
            '@angular/platform-browser-dynamic',
            '@angular/core',
            '@angular/common',
            '@angular/forms',
            '@angular/http',
            '@angular/router',
            'rxjs'
          ]
        },
        dllDir: HELP.DLL_FOLDER,
      })
    ],
    devtool: 'inline-source-map'
};