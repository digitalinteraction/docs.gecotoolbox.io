const fs = require('fs')
const lodash = require('lodash')

// from: https://github.com/robb-j/md-toc/
exports.slugify = function(value) {
  return value
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
}

exports.sortBy = function(collection = [], key = 'data.title') {
  return Array.from(collection).sort((a, b) =>
    lodash.get(a, key, '').localeCompare(lodash.get(b, key, ''))
  )
}

exports.jsonify = function(value) {
  return JSON.stringify(value, null, 2)
}

// Based on:
// from: https://github.com/robb-j/md-toc/
exports.extractTOC = function(inputPath) {
  if (!inputPath) return []

  const markdown = fs.readFileSync(inputPath, 'utf8')

  const headingParser = /^(#{2,})(.*)$/gm
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
        handle: exports.slugify(title)
      })
    }

    // Move to the next heading
    match = headingParser.exec(markdown)
  }

  return headings
}
