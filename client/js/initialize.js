const state = {
  recipes: [],
  loggedInUserName: null
}

fetch('/api/recipes')
  .then(res => res.json())
  .then(recipes => {
    state.recipes = recipes
    renderRecipeList()
  })
