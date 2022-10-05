function renderAddRecipe() {
  document.querySelector('#page').innerHTML = `
    <section class="create-recipe">
      <form onSubmit="createTreasure(event)">
        <h2>Add Recipes</h2>
        <fieldset>
          <label for="">Name: </label>
          <input type="text" name="name">
        </fieldset>
        <fieldset>
          <label for="">Img: </label>
          <input type="text" name="img">
        </fieldset>
        <fieldset>
          <label for="">Flavour: </label>
          <input type="text" name="flavour">
        </fieldset>
        <fieldset>
          <label for="">Ingredients: </label>
          <input type="text" name="ingredients">
        </fieldset>
        <fieldset>
          <label for="">Cooking Method: </label>
          <input type="text" name="cooking_method">
        </fieldset>
        <button>Add Recipes</button>
      </form>
    </section>
  `
}