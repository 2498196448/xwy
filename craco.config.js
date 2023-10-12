const path = require('path');

module.exports = {
  webpack: {
    entry: './src/index.jsx',
    configure: {
      resolve: {
        extensions: ['.json', '.js', '.ts', '.jsx'],
        alias: {
          '@': path.join(__dirname, './src'),
        },
      },
    },
  },
};
