module.exports = {
    // Your existing configuration...
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        // Your other rules...
      ],
    },
    // Make sure Webpack knows to look for .js and .jsx files
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  };
  