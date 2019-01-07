module.exports = {
    entry:__dirname + '/public/js/app.js',
    output: {
        path: __dirname + "/public",
        filename:'bundle.js'
    },
    // loaders ...
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env','@babel/preset-react']
              }
            }
          }
        ]
      }
}