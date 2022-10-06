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

router.put('/:id', (req, res) => {

  console.log("squeak")
  const recipe = req.body
  const recipeId = req.params.id
  // state.recipes[recipeId] = recipe

  const name = req.body.name 
  const img = req.body.img 
  const flavour = req.body.flavour
  const ingredients = req.body.ingredients
  const cooking_method = req.body.cooking_method

  Recipe
    .edit(name, img, flavour, ingredients, cooking_method, recipeId)
    .then(recipe => 
  res.json({ message: `${recipe.name} was successfully updated.` }))
})

router.delete('/:id', (req, res) => {
  const recipeId = req.params.id

  Recipe
    .delete(recipeId)
    .then(() => res.json({ message: 'deleted successfully' }))
})

module.exports = router
