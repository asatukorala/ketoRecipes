const express = require('express')
const app = express()
const port = process.env.PORT || 3000;


app.listen(PORT,
  () => console.log(`server listening to port ${PORT}`)
)
// models
const Recipe = require('./models/recipe')

//routes
app.get('/api/recipes', (req, res) => {
  Recipe
    .findAll()
    .then(recipes => res.json(recipes))
})