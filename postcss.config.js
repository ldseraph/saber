const { join } = require('path')

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer')(),
    require('postcss-nested'),
    // require('@fullhuman/postcss-purgecss')({
    //   content: [
    //     join(__dirname, 'theme/**/*.vue'),
    //     join(__dirname, 'theme/**/*.js')
    //   ],
    //   defaultExtractor(content) {
    //     const contentWithoutStyleBlocks = content.replace(
    //       /<style[^]+?<\/style>/gi,
    //       ''
    //     )
    //     return (
    //       contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) ||
    //       []
    //     )
    //   },
    //   whitelist: ['blockquote', 'body', 'html'],
    //   whitelistPatterns: [
    //     /-(leave|enter|appear)(|-(to|from|active))$/,
    //     /^(?!(|.*?:)cursor-move).+-move$/,
    //     /^router-link(|-exact)-active$/
    //   ]
    // })
  ]
}
