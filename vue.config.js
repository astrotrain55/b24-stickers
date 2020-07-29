const path = require('path');

const config = {
  devServer: {
    hot: true,
  },
  transpileDependencies: [
    'vuetify',
  ],
};

if (process.env.NODE_ENV === 'production') {
  config.publicPath = 'dist/';
  config.chainWebpack = (config) => {
    config
      .plugin('html')
      .tap((args) => {
        args[0].filename = path.resolve(__dirname, 'index.html');
        return args;
      });
  };
}

module.exports = config;
