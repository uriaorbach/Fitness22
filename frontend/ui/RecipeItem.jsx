function RecipeItem({ recipe, deleteRecipe, editRecipe }) {
  const { id, title, ingredients, steps } = recipe;
  return (
    <div>
      <h1>{title}</h1>
      <p>{ingredients}</p>
      <p>{steps}</p>

      <button onClick={() => editRecipe(id)}>edit</button>
      <button onClick={() => deleteRecipe(id)}>delete</button>
    </div>
  );
}

export default RecipeItem;
