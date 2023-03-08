const path = require('path');
const webpack = require('webpack');

module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          process: require.resolve('process/browser'),
          zlib: require.resolve('browserify-zlib'),
          stream: require.resolve('stream-browserify'),
          util: require.resolve('util'),
          buffer: require.resolve('buffer'),
          asset: require.resolve('assert')
        }
      },
      plugins: [
        new webpack.ProvidePlugin({
          Buffer: ['buffer', 'Buffer'],
          process: 'process/browser'
        })
      ]
    },
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@common': path.resolve(__dirname, 'src/common/'),
      '@providers': path.resolve(__dirname, 'src/providers/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@config': path.resolve(__dirname, 'src/config/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@locales': path.resolve(__dirname, 'src/locales/'),
      '@navigation': path.resolve(__dirname, 'src/navigation/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@services': path.resolve(__dirname, 'src/services/')
    }
  },
  jest: {
    configure: {
      globals: {
        CONFIG: true
      }
    }
  }
};
