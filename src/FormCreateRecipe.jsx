// import React from "react";

// const FormCreateRecipe = () => {
//   return (
//     <div>
//       <h3>Add Recipe Form</h3>
//       <form>
//         <input type="text" placeholder="Recipe name" />
//         <input type="text" placeholder="Recipe image" />
//         <textarea type="text" placeholder="Recipe description" />
//         <button type="submit">Add Recipe</button>
//       </form>
//     </div>
//   );
// };

// export default FormCreateRecipe;

import React from "react";
import Button from "./Button";

const FormCreateRecipe = ({ addRecipe }) => {
  const [values, setValues] = React.useState({
    title: "Recipe Title",
    image: "toast.png",
    description: "Description of the recipe",
    year: "2022",
  });

  const createRecipe = (event) => {
    event.preventDefault();
    const recipe = {
      title: values.title,
      image: values.image,
      description: values.description,
      year: values.year,
    };
    console.log(" making a recipe ", recipe);
    addRecipe(recipe);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(" name:: ", name, " value:: ", value);
    // computed property names
    setValues({ ...values, [name]: value });
  };

  return (
    <div>
      <h3>Add Recipe Form</h3>
      <form onSubmit={createRecipe}>
        <input
          type="text"
          placeholder="Recipe title"
          value={values.title}
          name="title"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Recipe image"
          value={values.image}
          name="image"
          onChange={handleInputChange}
        />
        <textarea
          placeholder="Recipe description"
          name="description"
          onChange={handleInputChange}
          value={values.description}
        />
        <input
          type="text"
          placeholder="Recipe year"
          value={values.year}
          name="year"
          onChange={handleInputChange}
        />

        <Button type="submit">Add Recipe</Button>
      </form>
    </div>
  );
};

export default FormCreateRecipe;
