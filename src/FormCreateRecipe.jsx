import React from "react";

const FormCreateRecipe = () => {
  return (
    <div>
      <h3>Add Recipe Form</h3>
      <form>
        <input type="text" placeholder="Recipe name" />
        <input type="text" placeholder="Recipe image" />
        <textarea type="text" placeholder="Recipe description" />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default FormCreateRecipe;
