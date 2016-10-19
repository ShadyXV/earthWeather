var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: 'public/bundle.js'
  },
  resolve: {
    root:__dirname,
    alias:{
      About:'app/components/About.jsx',
      Main:'app/components/Main.jsx',
      Nav:'app/components/Nav.jsx',
      Weather:'app/components/Weather.jsx',
      Example:'app/components/Example.jsx',
      Loc:'app/components/LocInput.jsx',
      WeatherUpdate:'app/components/WeatherUpdate.jsx',
      Openweathermap:'app/api/openweathermap.jsx'
    },
    extensions: ["",".js","jsx"]
  },
  module:{
      loaders: [
        {
          loader: 'babel-loader',
          query:{
            presets:['react','es2015','stage-0']
          },
          test:/\.jsx?$/,
          exclude:/(node_modules|bower_components|Screenshot)/
        }
      ]
  },
  devtool: 'cheap-module-eval-source-map'
};
