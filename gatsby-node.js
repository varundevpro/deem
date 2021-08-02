const path = require(`path`)
const quotes = require('./src/data/quotes.json')

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}

// Validate if we can build the project
exports.onPreInit = () => {
  function hasDuplicates(arr) {
    return new Set(arr).size !== arr.length
  }

  if (hasDuplicates(quotes.map((q) => q.id))) {
    throw new Error("Duplicate quote ids found.")
  } else {
    console.log('No duplicates found.')
  }
}

// Create quote pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const quoteTemplate = path.resolve(`src/templates/quote.jsx`)

  quotes.forEach((current, index, arr) => {
    createPage({
      path: `${current.id === '-' ? '/' : current.id}`,
      component: quoteTemplate,
      context: {
        previous: index >= 1 ? arr[index - 1] : null,
        current: arr[index],
        next: index === arr.length - 1 ? null : arr[index + 1]
      }
    })
  })
}
