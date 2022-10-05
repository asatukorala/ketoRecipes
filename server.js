const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

// middlewares
const logger = require('./middlewares/logger')

//controllers
const recipeController = require('./controllers/recipes_controller')

// models
const Recipe = require('./models/recipe')

app.listen(PORT,
  () => console.log(`server listening to port ${PORT}`)
)

app.use(logger)

app.use(express.static('client'))

app.use(express.json())

//middleware for controllers 
app.use('/api/recipes', recipeController)
app.use('/api/users', usersController)