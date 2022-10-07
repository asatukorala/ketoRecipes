function renderRecipeList() {
  document.querySelector('#page').innerHTML = `
  <section class="recipe-list">
  ${renderRecipes()}
  </section>
  `
}

{ }

function renderRecipes() {
  loginState()
  if (state.loggedInUserName != null) {
    return state.recipes.map(recipe => `
      <section class="recipe" data-id='${recipe.id}'>
      <header> 
        <h2>${recipe.name}</h2>
        <h3>${recipe.flavour}</h3>
      </header>
      <span class="button1" onClick="renderEditRecipe(${recipe.id})">edit</span>
      <span class="button" onClick="deleteRecipe(event)">delete</span>
      <br></br>
      <img src="${recipe.img}>"
      <br>
      <span><h4>Ingredients</h4></span>
      <p> ${recipe.ingredients} </p>
      <span><h4>Cooking method</h4></span>
      <p> ${recipe.cooking_method} </p>
      </section>
      `).join('')
  } else {
    return state.recipes.map(recipe => `
      <section class="recipe" data-id='${recipe.id}'>
      <header> 
        <h2>${recipe.name}</h2>
        <h3>${recipe.flavour}</h3>
        <h2>${recipe.name}</h2>
      </header>
      <img src="${recipe.img}>"
      <br>
      <span><h4>Ingredients</h4></span>
      <p> ${recipe.ingredients} </p>
      <span><h4>Cooking method</h4></span>
      <p> ${recipe.cooking_method} </p>
      </section>
      `).join('')
  }
}

function loginState() {
  if (state.loggedInUserName != null) {
    return document.querySelector(".container").innerHTML = `
      <nav class="header-nav">
      <ul class="menu">
        <li onClick="renderAddRecipe()">Add Recipe</li>
        <li onClick="renderRecipeList()">View Recipe</li>
        <li onClick="renderLogOut()">Logout</li> 
      </ul>
      </nav>
      `
  } else {
    return document.querySelector(".container").innerHTML = `
      <nav class="header-nav">
      <ul class="menu">
        <li onClick="renderAddRecipe()">Add Recipe</li>
        <li onClick="renderRecipeList()">View Recipe</li>
        <li onClick="renderSignUp()">Sign Up</li>
        <li onClick="renderLogin()">Login</li> 
      </ul>
      </nav>
      `
  }
}

function deleteRecipe(event) {
  const deleteBtn = event.target
  const recipeDOM = deleteBtn.closest('.recipe')
  const recipeId = recipeDOM.dataset.id

  fetch(`/api/recipes/${recipeId}`, {
    method: 'DELETE'
  })
    .then(() => {
      state.recipes = state.recipes.filter(r => r.id != recipeId)
      renderRecipeList()
    })
}