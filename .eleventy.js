const fs = require('fs')
const markdown = require('markdown-it')
const markdownAnchor = require('markdown-it-anchor')

// from: https://github.com/robb-j/md-toc/
function slugify(value) {
  return value
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
}

// from: https://github.com/robb-j/md-toc/
function extractTOC(inputPath) {
  if (!inputPath) return []

  const markdown = fs.readFileSync(inputPath, 'utf8')

  const headingParser = /^.*?(#{2,})(.*)$/gm
  let match = headingParser.exec(markdown)
  const headings = []

  // Loop through, finding each heading match
  while (match) {
    // Extract the hashes and title strings
    let [hashes, title] = match.slice(1)
    title = title.trim()

    // Only process if not our own title
    if (title !== 'Table of contents') {
      headings.push({
        title,
        level: hashes.length,
        handle: slugify(title)
      })
    }

    // Move to the next heading
    match = headingParser.exec(markdown)
  }

  return headings
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('static')

  eleventyConfig.addFilter('json', v => JSON.stringify(v, null, 2))
  eleventyConfig.addFilter('extractTOC', extractTOC)

  const md = markdown({
    html: true,
    breaks: false,
    linkify: false
  })

  md.disable('code')
  md.use(markdownAnchor, { slugify })

  eleventyConfig.setLibrary('md', md)

  return {
    dir: {
      input: 'src',
      output: 'dist',
      layouts: '_layouts',
      includes: '_includes'
    },
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    templateFormats: ['md', '11ty.js', 'njk', 'liquid']
  }
}
