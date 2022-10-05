const express = require('express')
const router = express.Router()

//models
const Recipe = require('../models/recipe')

//routes
router.get('/', (req, res) => {
  Recipe
    .findAll()
    .then(recipes => res.json(recipes))
})

module.exports = router
