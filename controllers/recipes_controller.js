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

router.post('/', (req, res) => {
  const name = req.body.name 
  const img = req.body.img 
  const flavour = req.body.flavour
  const ingredients = req.body.ingredients
  const cooking_method = req.body.cooking_method

  Recipe
    .create(name, img, flavour, ingredients, cooking_method)
    .then(recipe => res.json(recipe))
})

router.delete('/:id', (req, res) => {
  const recipeId = req.params.id

  Recipe
    .delete(recipeId)
    .then(() => res.json({ message: 'deleted successfully' }))
})

module.exports = router
