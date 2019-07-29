const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HappyPack = require('happypack');

const path=require('path');
// const theme=require('../theme');
const APP_NAME='Chaos_TS';
//控制是否需要登陆认证
const needAuth = 'true';

// 生产环境
var isProd = process.env.NODE_ENV === 'production';

function pathResolve(projectPath){
    return path.resolve(__dirname,'..' ,projectPath);
}

var plugins = [
    new webpack.optimize.CommonsChunkPlugin({
        names: ["vendor3","vendor2","vendor1"],
        minChunks: Infinity
    }),
    new webpack.optimize.CommonsChunkPlugin({name:'app', children:true, async:true, minChunks:2}),
    new HtmlWebpackPlugin({
        title:APP_NAME+'*'+needAuth,
        minify: {
            caseSensitive: false,             //是否大小写敏感
            collapseBooleanAttributes: true, //是否简写boolean格式的属性如：disabled="disabled" 简写为disabled
            collapseWhitespace: true         //是否去除空格
        },
        chunks:['app', 'vendor1','vendor2','vendor3'],
        inject:false,
        favicon:'./src/img/logo.png',
        template:'./src/index.html',
        filename:'./index.html', //结合output.path,
    }),
    new HtmlWebpackPlugin({
        title:APP_NAME+'_login'+'*'+needAuth,
        minify: {
            caseSensitive: false,             //是否大小写敏感
            collapseBooleanAttributes: true, //是否简写boolean格式的属性如：disabled="disabled" 简写为disabled
            collapseWhitespace: true         //是否去除空格
        },
        chunks:['login', 'vendor1','vendor2','vendor3'],
        inject:false,
        favicon:'./src/img/favicon.ico',
        template:'./src/login.html',
        filename:'./login.html' //结合output.path
    }),
    new HappyPack({
        id: 'less',
        loaders: ['style-loader', 'css-loader?minimize', {
            loader:'less-loader',
            options:{
                javascriptEnabled:true,
                // modifyVars:theme
            }
        }]
    }),
    new HappyPack({
        id: 'css',
        loaders: ['style-loader', 'css-loader?minimize']
    }),
    new CopyWebpackPlugin([
        {from:pathResolve('src/vendor'), ignore:['fonts/*']},
        {from:'src/*.html', to:'[name].html'}
    ]),
    new webpack.ProvidePlugin({
        React:'react',
        Img:'components/Img',
        APP_LOGO_EN:'img/favicon_en.svg',
        APP_LOGO_ZH:'img/favicon_zh.svg'
    }),
    new webpack.DefinePlugin({
        'APP_NAME': JSON.stringify(APP_NAME),
        'APP_EDITION': JSON.stringify('default'),
        'NEED_AUTH':JSON.stringify(needAuth)
    }),
    // new ExtractTextPlugin({
    //     filename: '[name].css' //路径以及命名
    // })
]

module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: {
        login:'./src/ts/login',
        app:'./src/ts/index', //入口
        vendor1:[
            'react',
            'react-dom',
            'react-redux',
            "redux",
            "redux-thunk",
        ],
        vendor2:[
            'antd'
        ],
        vendor3:[
            "intl",
            "nprogress",
            "react-intl",
            'draft-js'
        ]
        
    },
    output: {
        //给require.ensure用；webpack-dev-server的网站名
        publicPath:isProd ? './' : '/',
        //js的发布路径,是相对于package.json文件而言
        path: pathResolve('./chaos'),
        //对应与entry中要打包出来分文件
        filename: isProd ? '[name].[chunkhash:8].js' : '[name].js',
        //对应于非entry中但仍需要打包出来的文件，比如按需加载require,ensure
        chunkFilename:isProd ? '[name].chunk.[chunkhash:8].js' : '[name].chunk.js'
    },
    //  webpack4使用splitChunks替代了CommonsChunkPlugin
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all',
    //         minSize: 30000,//合并前模块文件的体积
    //         minChunks: 1,//最少被引用次数
    //         maxAsyncRequests: 5,
    //         maxInitialRequests: 3,
    //         // automaticNameDelimiter: '~',//自动命名连接符
    //         cacheGroups: {
    //             common:{
    //                 name:'common',
    //                 chunks: "all",
    //                 minChunks: 1,
    //                 priority: 0,
    //                 // test:/src/,
    //                 reuseExistingChunk: true,
    //             },
    //             vendor1:{
    //                 name:'vendor1',
    //                 chunks:"all",
    //                 test: (module) => {
    //                     return /react|redux|ant|moment/.test(module.context);
    //                   },
    //                 minChunks:1,
    //                 priority:15,
    //                 reuseExistingChunk: false,
    //             },
    //             vendor2:{
    //                 name:'vendor2',
    //                 chunks:"all",
    //                 test: /[\\/]node_modules[\\/]/,
    //                 minChunks:1,
    //                 priority:10,
    //                 reuseExistingChunk: false,
    //             }
               
    //         }
    //     }
    // },
    resolve: {
        extensions: ['.js', '.less','.ts','.tsx','.json'],//在这里指定所有拓展名，否则会找不到对应模块
        alias:{
            react:pathResolve('node_modules/react'),
            'react-redux':pathResolve('node_modules/react-redux'),
            'react-dom':pathResolve('node_modules/react-dom'),
            img:pathResolve('src/img'),
            json:pathResolve('src/json'),
            less:pathResolve('src/less'),
            appStore:pathResolve('src/ts/store.ts'),
            customInterface:pathResolve('src/ts/interface.ts'),
            actions:pathResolve('src/ts/actions'),
            components:pathResolve('src/ts/components'),
            pages:pathResolve('src/ts/pages'),
            utils:pathResolve('src/ts/utils'),
            config:pathResolve('src/ts/config')
        }
    },
    externals:{
        $:'jquery'
    },
    module:{
        rules:[
            {test: /\.(otf|eot|svg|ttf|woff|woff2)\??.*$/, use:'url-loader?limit=100000&name=[hash:8].[ext]'},
            // {test: /\.css$/, use: ExtractTextPlugin.extract({
            //    fallback: 'style-loader',
            //    use: ['css-loader']
            // }), include:pathResolve('src/less')},
            {test: /\.css$/, use: 'happypack/loader?id=css'},
            {
                test: /\.less$/,
                use:'happypack/loader?id=less',
                // include:[resolve('src/less')]
                include:[pathResolve('src/less'),pathResolve('node_modules/antd')]
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,//不解析node_modules
                loader: 'ts-loader'
            },
            {
                test: /\.(png|jpe?g|gif)(\?.*)?$/,//这里加上svg反而会处理不了svg图
                loader: 'url-loader',
                include: [pathResolve('src/img')],
                options: {
                    limit: 100000,
                    // name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            //加载json，png等文件
            //安装npm install --save-dev file-loader
            // {
            //    test: /\.[(png)|(jpg)|(obj)|(json)]$/,
            //    loader: "file-loader" 
            // },
        ]
    },
    plugins: plugins
}