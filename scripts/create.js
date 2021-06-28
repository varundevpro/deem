const fs = require('fs')
const path = require('path')
const prompt = require('prompt')
const { v4: uuidv4 } = require('uuid')

// start the prompt
prompt.start()

// create an object
const quote = {
  id: uuidv4()
}

// extend `quote` object
prompt.addProperties(quote, ['message', 'author'], (err) => {
  if (err) {
    throw err
  }

  // print modified object
  console.log(JSON.stringify(quote, null, 2))

  try {
    const filepath = path.resolve(__dirname, '../src/data/quotes.json')
    const jsonString = fs.readFileSync(filepath)

    const quotes = JSON.parse(jsonString)
    const newQuotes = JSON.stringify(quotes.concat(quote))

    fs.writeFileSync(filepath, newQuotes)
  } catch (err) {
    console.log(err)
    return
  }
})
