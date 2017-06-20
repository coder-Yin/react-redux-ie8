var path = require('path')
var webpack = require('webpack')
var SpritesmithPlugin = require('webpack-spritesmith');
var fs = require('fs');

function getComponents() {
    let spritesmithPlugins = [
      new webpack.optimize.OccurenceOrderPlugin()
    ];
    let components = fs.readdirSync("./components/");
    for (let component of components) {
        let value = `components/${component}/icons`;
        let sourcePath = path.join(__dirname,value);
        if (fs.existsSync(sourcePath)) {
          let targetPath =  path.join(__dirname,`components/${component}`);
          let obj = new SpritesmithPlugin({
              src: {
                  cwd: sourcePath,
                  glob: '*.png'
              },
              target: {
                  image: path.resolve(targetPath, 'spritesmith/sprite.png'),
                  css: path.resolve(targetPath, 'spritesmith/sprite.css')
              },
              // 样式文件中调用雪碧图地址写法
              apiOptions: {
                  cssImageRef: "./spritesmith/sprite.png"
              },
              spritesmithOptions: {
                  padding: 10,
                  algorithm: 'top-down'
              }
          });
          spritesmithPlugins.push(obj);

        }
    }
    return spritesmithPlugins;
}


module.exports = {
  // devtool: 'cheap-module-eval-source-map',
  entry: [
    './index'
  ],
  output: {
    // publicPath: '/static/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',

  },
  plugins: getComponents(),
  resolve: {
        modulesDirectories: ["node_modules", "spritesmith"]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./components/")]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [  'es3ify-loader' ,'babel',],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.json$/,
        loaders: [ 'json' ],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: __dirname
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'px2rem', 'sass']
      },
      {
        test: /\.scss\?p6$/,
        loaders: ['style', 'css', 'px2rem?remUnit=37.5', 'sass']
      },
      {
        test: /\.scss\?p5$/,
        loaders: ['style', 'css?modules&importLoaders=1&localIdentName=[path]_[name]__[local]___[hash:base64:5]&sourceMap', 'px2rem?remUnit=32', 'sass']
      },
      {
        test: /\.png$/,
        loaders: [
                'file?name=i/[hash].[ext]'
              ]
      }
    ]
  }
}
