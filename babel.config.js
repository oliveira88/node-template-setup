module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@config': './src/config',
          '@controllers': './src/controllers',
          '@models': './src/models',
          '@modules': './src/modules',
          '@services': './src/services',
          '@views': './src/views'
        }
      }
    ]
  ],
  ignore: ['**/*.spec.ts']
};
