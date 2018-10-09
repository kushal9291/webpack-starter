 module.exports = ({ file, options, env }) => ({
      parser: file.extname === '.sss' ? 'sugarss' : false, // Handles `.css` && '.sss' files dynamically
        plugins: {
          'postcss-cssnext': {}, 
          'postcss-preset-env': { browsers: 'last 4 versions' },
         'cssnano':  env === 'production'  ? {} : false
        }
    })