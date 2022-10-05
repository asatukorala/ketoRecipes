const state ={
  recipes: []
}

fetch('/api/recipes')
  .then(res => res.json())
  .then(recipes => {
    state.recipes = recipes
    renderRecipeList()
  })
  