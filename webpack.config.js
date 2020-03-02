const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
<<<<<<< HEAD
    entry: {
        main: "./src/index.js",
        datos: "./src/seccionUsuario.js"
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "build")
    },
    module: {
        rules: [{
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            ['@babel/plugin-proposal-class-properties']
                        ]
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(scss)$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader, // inject CSS to page
                }, {
                    loader: 'css-loader', // translates CSS into CommonJS modules
                }, {
                    loader: 'postcss-loader', // Run postcss actions
                    options: {
                        plugins: function() { // postcss plugins, can be exported to postcss.config.js
                            return [
                                require('autoprefixer')
                            ];
                        }
                    }
                }, {
                    loader: 'sass-loader' // compiles Sass to CSS
                }]
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        //
        new MiniCssExtractPlugin({
            filename: "styles.css"
        }),
        new MiniCssExtractPlugin({
            filename: "seccionUsuario.css"
        })
=======
   entry: {
    main: "./src/index.js",
    about: "./src/seccionUsuario.js",
    admin: "./src/loginAdmin.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build")
  },
  
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [['@babel/plugin-proposal-class-properties']]
          }
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(scss)$/,
        use: [{
          loader: MiniCssExtractPlugin.loader, // inject CSS to page
        }, {
          loader: 'css-loader', // translates CSS into CommonJS modules
        }, {
          loader: 'postcss-loader', // Run postcss actions
          options: {
            plugins: function () { // postcss plugins, can be exported to postcss.config.js
              return [
                require('autoprefixer')
              ];
            }
          }
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      },
>>>>>>> dc8877f3f103567783fa9a29d5a683a80d03eeda
    ]
};
module.exports = {

    entry: {
        main: "./src/index.js",
        about: "./src/seccionUsuario.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "build")
    },
    module: {
        rules: [{
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            ['@babel/plugin-proposal-class-properties']
                        ]
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(scss)$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader, // inject CSS to page
                }, {
                    loader: 'css-loader', // translates CSS into CommonJS modules
                }, {
                    loader: 'postcss-loader', // Run postcss actions
                    options: {
                        plugins: function() { // postcss plugins, can be exported to postcss.config.js
                            return [
                                require('autoprefixer')
                            ];
                        }
                    }
                }, {
                    loader: 'sass-loader' // compiles Sass to CSS
                }]
            },
        ]
    },

<<<<<<< HEAD
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            inject: true,
            chunks: ['main'],
            filename: 'index.html'
        }),

        new HtmlWebpackPlugin({
            template: "./public/seccionUsuario.html",
            inject: true,
            chunks: ['about'],
            filename: 'seccionUsuario.html'
        }),
        new MiniCssExtractPlugin({
            filename: "styles.css"
        })

    ]
};
=======

    // new HtmlWebpackPlugin({
    //   template: "./public/seccionUsuario.html"
    // }),

    new MiniCssExtractPlugin({
      filename: "styles.css"
    }),

    new HtmlWebpackPlugin({
      template: "./public/seccionUsuario.html",
      inject: true,
      chunks: ['about'],
      filename: 'seccionUsuario.html'

    }),
    new HtmlWebpackPlugin({
      template: "./public/loginAdmin.html",
      inject: true,
      chunks: ['admin'],
      filename: 'loginAdmin.html'

    }),

  ]
};

>>>>>>> dc8877f3f103567783fa9a29d5a683a80d03eeda
