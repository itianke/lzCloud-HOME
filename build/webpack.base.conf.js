const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const { VueLoaderPlugin } = require('vue-loader')
const HappyPack = require('happypack')
const os = require('os')
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// var webpack = require('webpack')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

// const cssLoader = new MiniCssExtractPlugin({
//   use: [
//     'happypack/loader?id=happy-css'
//   ]
// })

// // inject happypack accelerate packing for vue-loader @17-08-18
// Object.assign(vueLoaderConfig.loader, {
//   js: 'happypack/loader?id=happy-babel-vue',
//   css: cssLoader
// })

function createHappyPlugin(id, loaders) {
    return new HappyPack({
        id: id,
        loaders: loaders,
        threadPool: happyThreadPool,
        // make happy more verbose with HAPPY_VERBOSE=1
        verbose: process.env.HAPPY_VERBOSE === '1'
    })
}

module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: {
        app: ['babel-polyfill', './src/main.js']
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : (process.env.NODE_ENV === 'sit' || process.env.NODE_ENV === 'uat') ? config.build.assetsPublicPath : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        modules: [
            resolve('src'),
            resolve('node_modules')
        ],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
            'src': resolve('src'),
            'components': resolve('src/views/components')
        }
    },
    module: {
        rules: [{
            enforce: 'pre',
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'eslint-loader',
            options: {
                cache: true,
                formatter: require('eslint-friendly-formatter')
            }
        },
        {
            enforce: 'pre',
            test: /\.vue$/,
            loader: 'eslint-loader',
            options: {
                cache: true,
                formatter: require('eslint-friendly-formatter')
            }
        }, {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: vueLoaderConfig
        },
        {
            test: /\.js$/,
            loader: ['happypack/loader?id=happy-babel-js'],
            // exclude: /(node_modules)/,
            // exclude: file => (
            //     /node_modules/.test(file) &&
            //     !/\.vue\.js/.test(file)
            // ),
            include: [
                resolve('src'),
                resolve('test'),
                resolve('node_modules/vue-echarts'),
                resolve('node_modules/resize-detector'),
                resolve('node_modules/webpack-dev-server/client')
            ]
        },
        {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: utils.assetsPath('img/[name].[hash:7].[ext]')
            }
        },
        {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: utils.assetsPath('media/[name].[hash:7].[ext]')
            }
        },
        {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
            }
        },
        {
            test: /\.svg$/,
            loader: 'happypack/loader?id=happy-svg',
            include: [resolve('src/assets/icons'), resolve('src/assets/images')]
        }
        ]
    },
    node: {
        // prevent webpack from injecting useless setImmediate polyfill because Vue
        // source contains it (although only uses it if it's native).
        setImmediate: false,
        // prevent webpack from injecting mocks to Node native modules
        // that does not make sense for the client
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    },
    plugins: [
        createHappyPlugin('happy-babel-js', ['babel-loader?cacheDirectory=true']),
        createHappyPlugin('happy-babel-vue', ['babel-loader?cacheDirectory=true']),
        createHappyPlugin('happy-css', ['css-loader', 'vue-style-loader']),
        createHappyPlugin('happy-svg', ['svg-sprite-loader']),
        new HappyPack({
            loaders: [{
                path: 'vue-loader',
                query: {
                    loaders: {
                        scss: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    }
                }
            }]
        }),
        new VueLoaderPlugin()
    ]
}
