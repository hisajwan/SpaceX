require('ignore-styles');

// Required to use redux saga
require('babel-polyfill')

// Registering babel presets using @babel/register to use ES6 features
require('@babel/register')({
    ignore: [/(node_modules)/],
    presets: ['@babel/preset-env', '@babel/preset-react']
});

// Environment file
require('./config/env');

// Server config
require('./server');