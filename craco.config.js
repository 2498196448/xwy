const path = require('path');

module.exports = {
  webpack: {
    entry: './src/index.jsx',
    resolve: {
      alias: {
        '@': path.join(__dirname, './src'),
      },
    },
  },
};
