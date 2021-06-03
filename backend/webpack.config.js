// External modules
require('dotenv').config();
const path = require('path');
const chalk = require('chalk');

// Webpack plugin modules
const DotEnvPlugin = require('dotenv-webpack');
const NodemonPlugin = require('nodemon-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

// Environment config
const isDevelopment = process.env.NODE_ENV === 'development';
const mode = isDevelopment ? 'development' : 'production';

console.log(chalk.blue.bold(`Webpack bundling for ${mode} environment`));

// Bundle config options
const BUNDLE = {
  entry: './index.ts',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'build'),
  },
};

module.exports = {
  mode,
  target: 'node',
  entry: BUNDLE.entry,
  stats: 'errors-only',
  node: {
    __dirname: true,
    __filename: true,
  },
  module: getLoaders(),
  plugins: getPlugins(),
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: {
      '@backend/config': path.resolve(__dirname, 'config'),
      '@backend/graphql': path.resolve(__dirname, 'packages/graphql'),
      '@backend/utils': path.resolve(__dirname, 'packages/utils'),
      '@backend/db': path.resolve(__dirname, 'packages/db'),
      graphql$: path.resolve(__dirname, 'node_modules/graphql/index.js'),
    },
  },
  optimization: {
    minimize: false,
  },
  output: BUNDLE.output,
};

/**
 * Loaders used by the application.
 */
function getLoaders() {
  const graphql = {
    test: /\.(graphql|gql)$/,
    exclude: /node_modules/,
    loader: 'graphql-tag/loader',
  };

  const esbuild = {
    test: /\.(js|jsx|ts|tsx)?$/,
    loader: 'esbuild-loader',
    options: {
      loader: 'tsx',
      target: 'es2015',
    },
    exclude: /node_modules/,
  };

  const loaders = {
    rules: [graphql, esbuild],
  };

  return loaders;
}

/**
 * Plugins
 */
function getPlugins() {
  const dotEnv = new DotEnvPlugin();
  const nodemon = new NodemonPlugin();
  const typescriptChecker = new ForkTsCheckerWebpackPlugin({
    async: true,
    typescript: {
      memoryLimit: 8192,
      diagnosticOptions: {
        semantic: true,
        syntactic: true,
      },
    },
  });
  // Order matters!
  return [dotEnv, typescriptChecker, nodemon];
}
