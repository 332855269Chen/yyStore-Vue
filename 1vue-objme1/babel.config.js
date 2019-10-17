module.exports = {
  presets: [
    '@vue/app',
    // ["es2015", { "modules": false }],
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant'],
    
    // ["component", [
    //   {
    //     "libraryName": "mint-ui",
    //     "style": true
    //   }
    // ]]

  ]

}
