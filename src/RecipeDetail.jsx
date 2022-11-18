import React from "react";
import { Link, useParams } from "react-router-dom";

function RecipeDetail(props) {
  const { recipeId } = useParams();
  const currRecipe = props.recipes.filter((recipe) => recipe._id === recipeId);
  console.log("currRecipe[0]", currRecipe[0]);
  const thisRecipe = { ...currRecipe[0] };
  console.log(" thisRecipe ", thisRecipe);

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
      <Link to="/">Home</Link>
    </div>
  );
}

export default RecipeDetail;
