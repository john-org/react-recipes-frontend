import React from "react";
import Recipe from "./Recipe";
import FormCreateRecipe from "./FormCreateRecipe";
import RecipesContext from "./RecipesContext";

function Recipes({ addRecipe }) {
  const { recipes, loggedin } = React.useContext(RecipesContext);

  return (
    // Before using the Form
    // <summary>
    //   {recipes.map((recipe) => (
    //     <Recipe key={recipe._id} recipe={recipe} />
    //   ))}
    // </summary>

    // Before Adding the 'Add Recipes'
    // <section>
    //   {loggedin && <FormCreateRecipe />}
    //   {recipes.map((recipe) => (
    //     <Recipe key={recipe._id} recipe={recipe} />
    //   ))}
    // </section>

    <section>
      {loggedin && <FormCreateRecipe addRecipe={addRecipe} />}
      {recipes.map((recipe) => (
        <Recipe key={recipe._id} recipe={recipe} />
      ))}
    </section>
  );
}

export default Recipes;
