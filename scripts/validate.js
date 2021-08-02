const quotes = require('../src/data/quotes.json')

function hasDuplicates(arr) {
  return new Set(arr).size !== arr.length
}

if (hasDuplicates(quotes.map((q) => q.id))) {
  throw new Error("Duplicate quote ids found.")
} else {
  console.log('No duplicates found.')
}