import React from "react";
import Recipe from "./Recipe";
import FormCreateRecipe from "./FormCreateRecipe";

function Recipes({ recipes, loggedin }) {
  return (
    // Before using the Form
    // <summary>
    //   {recipes.map((recipe) => (
    //     <Recipe key={recipe._id} recipe={recipe} />
    //   ))}
    // </summary>

    <section>
      {loggedin && <FormCreateRecipe />}
      {recipes.map((recipe) => (
        <Recipe key={recipe._id} recipe={recipe} />
      ))}
    </section>
  );
}

export default Recipes;
