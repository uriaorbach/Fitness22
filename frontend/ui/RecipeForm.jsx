import { useState } from "react";
import axios from "axios";

function RecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);

  const onSubmit = async function (e) {
    e.preventDefault();

    const newRecipe = { title, ingredients, steps };
    await axios.post("http://localhost:4000/recipes", newRecipe);

    setTitle("");
    setIngredients("");
    setSteps("");
  };

  const handleIngredients = function (ingredients) {
    const ingredientsAsArray = ingredients.split(",");
    setIngredients(ingredientsAsArray);
  };

  const handleSteps = function (steps) {
    const stepsAsArray = steps.split(",");
    setSteps(stepsAsArray);
  };

  return (
    <form className="form-recipe" onSubmit={onSubmit}>
      <div className="input-container">
        <label className="label">Title</label>
        <input
          className="input-field"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div className="input-container">
        <label className="label">Ingredients</label>
        <textarea
          id="ingredients"
          name="ingredients"
          value={ingredients}
          onChange={(e) => handleIngredients(e.target.value)}
          placeholder="Enter ingredients, separated by commas"
        />
      </div>
      <div>
        <label>Steps</label>
        <textarea
          id="steps"
          name="steps"
          value={steps}
          onChange={(e) => handleSteps(e.target.value)}
          placeholder="Enter steps, separated by commas"
        />
      </div>
      <button>Submit</button>
    </form>
  );
}

export default RecipeForm;
