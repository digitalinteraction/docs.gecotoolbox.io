const markdown = require('markdown-it')
const markdownAnchor = require('markdown-it-anchor')

const filters = require('./11ty/filters')
const shortcodes = require('./11ty/shortcodes')

module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget('./sass/')
  eleventyConfig.addPassthroughCopy('static')

  for (const [key, filter] of Object.entries(filters)) {
    eleventyConfig.addFilter(key, filter)
  }
  for (const [key, shortcode] of Object.entries(shortcodes)) {
    eleventyConfig.addShortcode(key, shortcode)
  }

  const md = markdown({
    html: true,
    breaks: false,
    linkify: false
  })

  md.disable('code')
  md.use(markdownAnchor, { slugify: filters.slugify })

  eleventyConfig.setLibrary('md', md)

  return {
    dir: {
      input: 'src',
      output: 'dist',
      layouts: '_layouts'
    },
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    templateFormats: ['md', '11ty.js', 'njk', 'liquid']
  }
}
