const webpack = require('webpack');
const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias['Validator'] = path.join(__dirname, '../shared/validationSchemas.js')
    config.module.rules.push({
      test: /\.(pdf|gif|png|jpe?g|svg)$/,
      use: 'file-loader?name=[path][name].[ext]',
      include: path.resolve(__dirname, 'static'),
    });
    return config;
  },
};
