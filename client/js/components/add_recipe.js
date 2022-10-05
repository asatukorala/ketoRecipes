function createRecipe(event) {
  event.preventDefault()
  const form = event.target

  const data = Object.fromEntries(new FormData(form))


  fetch('/api/recipes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(recipe => {
      state.recipes.push(recipe)
      renderRecipeList()
    })

}