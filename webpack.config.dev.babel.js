import path from 'path';
import webpack from 'webpack';

export default {
  mode: 'development',
  entry:[
    'webpack-hot-middleware/client',
    path.resolve(__dirname, 'src/')
  ],
  output:{
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve:{
    extensions: ['.js','.json','.jsx']
  },
  module:{
    rules:[
      {
        test: /\.jsx?$/,
        use:{
          loader: 'babel-loader'
        },
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {},
    }]
  }
};
