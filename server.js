const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

const recipeController = require('.controllers/recipes_controller')

app.listen(PORT,
  () => console.log(`server listening to port ${PORT}`)
)
// models
const Recipe = require('./models/recipe')

const logger = require('./middlewares/logger')


app.use(logger)
//routes
app.use('/api/recipe', recipeController)