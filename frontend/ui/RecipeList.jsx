import axios from "axios";
import { useEffect, useState } from "react";
import RecipeItem from "./RecipeItem";

function RecipeList() {
  const [recipes, setRecipes] = useState({});

  const fetchRecipes = async () => {
    const res = await axios.get("http://localhost:4000/recipes");
    if (res) setRecipes(res.data);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const deleteRecipe = async (id) => {
    await axios.delete(`http://localhost:4000/recipes/${id}`);
    console.log(`deleted recipe with id ${id} `);
  };
  const editRecipe = async (id) => {};

  const renderedRecipes = Object.values(recipes).map((recipe) => {
    return (
      <li key={recipe.id}>
        <RecipeItem
          recipe={recipe}
          deleteRecipe={deleteRecipe}
          editRecipe={editRecipe}
        />
      </li>
    );
  });

  return <ul className="recipe-list">{renderedRecipes}</ul>;
}
export default RecipeList;
