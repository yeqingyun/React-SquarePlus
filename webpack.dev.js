const path = require("path");
const webpack = require("webpack");
const HtmlWebapckPlugin = require("html-webpack-plugin");
const OpenBrowserPlugin = require("open-browser-webpack-plugin");

module.exports = {
  // 入口文件
  entry: {
    index: "./src/index",
    // 打包第三方库
    vendor: ["react", "react-dom", "react-router", "react-router-dom", "intl"]
  },

  //输出文件
  output: {
    filename: "[name].js",
    chunkFilename: "[id].js",
    path: path.resolve(__dirname, "dist")
  },

  // 定位bug ，生成环境与开发环境值不同 (http://www.css88.com/doc/webpack/configuration/devtool/)
  devtool: "eval-source-map",

  // 各个loader
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["es2015", "stage-0", "react"],
          plugins: [
            "transform-runtime",
            ["import", { libraryName: "antd", style: "css" }]
          ]
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader",
            options: {
              // 如果没有options这个选项将会报错 No PostCSS Config found
              plugins: loader => [
                require("autoprefixer")() //CSS浏览器兼容
              ]
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader",
            options: {
              // 如果没有options这个选项将会报错 No PostCSS Config found
              plugins: loader => [
                require("autoprefixer")() //CSS浏览器兼容
              ]
            }
          },
          {
            loader: "less-loader"
          }
        ]
      },

      {
        test: /\.(jpg|png|gif|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000
          }
        }
      }
    ]
  },

  // 插件列表
  plugins: [
    // 自动打开浏览器
    new OpenBrowserPlugin({ url: "http://localhost:8080" }),

    new webpack.HotModuleReplacementPlugin(), // 热加载插件

    new webpack.optimize.CommonsChunkPlugin({
      names: ["vendor", "manifest"],
      minChunks: Infinity, // 允许插件修改哪些内容，包括head与body,
      // async: true,
      minify: {
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: true // 删除空白符与换行符
      }
    }),

    new webpack.NamedModulesPlugin(), // 功能同上，适用于开发环境

    // html模版
    new HtmlWebapckPlugin({
      template: "./src/index.html"
    })
  ],

  // 给模块添加文件后缀
  resolve: {
    extensions: [".js", ".jsx", ".less", ".css"] // 后缀名自动补全
  },

  // 本地服务配置
  devServer: {
    port: 8080,
    hot: true,
    // 让其他用户可以访问
    disableHostCheck: true
  }
};
