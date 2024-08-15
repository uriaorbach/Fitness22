const express = require("express");
const crypto = require("crypto");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
const port = 4000;

const recipes = {};

app.get("/recipes", (req, res) => {
  res.send(recipes);
});
app.post("/recipes", (req, res) => {
  const id = crypto.randomBytes(16).toString("hex");
  const { title, ingredients, steps } = req.body;

  recipes[id] = { id, title, ingredients, steps };

  res.status(201).send(recipes[id]);
});

app.put("/recipes/:id", (req, res) => {
  const { id } = req.params; // Extract id from the route parameter
  const { title, ingredients, steps } = req.body; // Extract new data from the request body

  // Check if the recipe exist
  if (!recipes[id]) {
    return res.status(404).send("Recipe not found");
  }
  recipes[id] = {
    title,
    ingredients,
    steps,
  };
  res.send(recipes[id]); // Send the updated recipe back to the client
});

app.delete("/recipes/:id", (req, res) => {
  const { id } = req.params;

  // Check if recipe exists
  if (!recipes[id]) {
    return res.status(404).send("Recipe not found");
  }

  // Delete the recipe
  const deletedRecipe = recipes[id];
  delete recipes[id];

  res.send(deletedRecipe); // Send the deleted recipe back to the client
});

app.listen(port, () => {
  console.log("Listening on 4000");
});
