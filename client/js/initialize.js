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

  fetch('/api/sessions')
  .then(res => res.json())
  .then(userName => {
    if (typeof userName === 'string') {
      state.loggedInUserName = userName
    }
  })
  
