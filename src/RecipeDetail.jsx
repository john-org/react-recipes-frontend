import React from "react";
import { Link, useParams } from "react-router-dom";

import FormEditRecipe from "./FormEditRecipe";

import RecipesContext from "./RecipesContext";

function RecipeDetail({ deleteRecipe, editRecipe }) {
  const { recipes, loggedin } = React.useContext(RecipesContext);

  const { recipeId } = useParams();
  const [recipeDeleted, setRecipeDeleted] = React.useState(false);

  const currRecipe = recipes.filter((recipe) => recipe._id === recipeId);
  console.log("currRecipe[0]", currRecipe[0]);
  const thisRecipe = { ...currRecipe[0] };
  console.log(" thisRecipe ", thisRecipe);

  const delRecipe = () => {
    deleteRecipe(thisRecipe._id);
    setRecipeDeleted(true);
  };

  if (recipeDeleted) {
    return (
      <>
        <p>Recipe deleted!</p>
        <Link to="/">Home</Link>
      </>
    );
  }

  return (
    //  1. Returns JSON
    // <details>
    //   <pre>{JSON.stringify(props, null, 2)}</pre>
    // </details>

    // 2. Just quick debugging
    // <div>
    //   <h2>{currRecipe[0].title}</h2>
    // </div>

    <div>
      <img src={`/img/${thisRecipe.image}`} alt={thisRecipe.title} />
      <h1>{thisRecipe.title}</h1>
      <p>{thisRecipe.description}</p>
      {loggedin && (
        // <button onClick={() => deleteRecipe(thisRecipe._id)}>delete</button>
        <>
          <FormEditRecipe thisRecipe={thisRecipe} editRecipe={editRecipe} />
          <button onClick={() => delRecipe()}>delete</button>
        </>
      )}
      <Link to="/">Home</Link>
    </div>
  );
}

export default RecipeDetail;
