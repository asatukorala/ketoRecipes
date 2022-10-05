const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

// middlewares
const logger = require('./middlewares/logger')
const sessions = require('./middlewares/sessions')

//controllers
const recipesController = require('./controllers/recipes_controller')
const usersController = require('./controllers/users_controller')
const sessionsController = require('./controllers/sessions_controller')

// models
const Recipe = require('./models/recipe')

app.listen(PORT,
  () => console.log(`server listening to port ${PORT}`)
)

app.use(logger)


app.use(express.static('client'))

app.use(express.json())

app.use(sessions)

//middleware for controllers 
app.use('/api/recipes', recipeController)
app.use('/api/users', usersController)
app.use('/api/sessions', sessionsController)