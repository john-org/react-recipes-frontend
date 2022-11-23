import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Not needed because using Recipes Component now below
// import Recipe from "./Recipe";
import Recipes from "./Recipes";
import RecipeDetail from "./RecipeDetail";
import Nav from "./Nav";

import { useFetch } from "./hooks/useFetch";

// Neeeded due to updated Fetch Hook
import useToggle from "./hooks/useToggle";

// Context
import RecipesContext from "./RecipesContext";

function App() {
  //   const [recipes, setRecipes] = React.useState([]);
  // const [loggedin, setLoggedin] = React.useState(false);
  // const { loading, data: recipes, error } = useFetch(`/api/recipes`);

  // Neeeded due to updated Fetch Hook
  const [recipes, setRecipes] = React.useState([]);
  const [loggedin, setLoggedin] = useToggle(true);
  const [loading, setLoading] = useToggle(true);
  const [error, setError] = React.useState("");

  // Use updated Fetch Hook
  const { get, post, del, put } = useFetch(`/api/recipes`);

  const addRecipe = (recipe) => {
    post("/api/recipes", recipe).then((data) => {
      setRecipes([data, ...recipes]);
    });
  };

  const deleteRecipe = (recipeId) => {
    console.log("recipeId:", recipeId);
    // del(`/api/recipes/${recipeId}`).then(window.location.replace("/"));
    del(`/api/recipes/${recipeId}`).then(
      setRecipes((recipes) =>
        recipes.filter((recipe) => recipe._id !== recipeId)
      )
    );
  };

  const editRecipe = (updatedRecipe) => {
    console.log(updatedRecipe);
    put(`/api/recipes/${updatedRecipe._id}`, updatedRecipe).then(
      get("/api/recipes").then((data) => {
        setRecipes(data);
      })
    );
  };

  /* eslint-disable react-hooks/exhaustive-deps */
  React.useEffect(() => {
    setLoading(true);
    get("/api/recipes")
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((error) => setError(error));
  }, []);

  if (loading === true) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // a. Removed due to the use of useFetch hook
  //   React.useEffect(() => {
  //     fetch(`/api/recipes`)
  //       .then((response) => response.json())
  //       .then((data) => setRecipes(data));
  //   }, []);

  // 1. This was when there was only Recipe.
  // Now we have Recipes (plural) Component
  //   return (
  //     <div>
  //       {recipes.map((recipe) => (
  //         <Recipe key={recipe._id} recipe={recipe} />
  //       ))}
  //     </div>
  //   );

  // 2. without Route
  //   return (
  //     <main>
  //       <Recipes recipes={recipes} />
  //     </main>
  //   );

  const value = { recipes, loggedin };
  return (
    <RecipesContext.Provider value={value}>
      <main>
        <BrowserRouter>
          <Nav setLoggedin={setLoggedin} />
          <Routes>
            <Route path="/" element={<Recipes addRecipe={addRecipe} />} />
            <Route
              path="/:recipeId"
              element={
                <RecipeDetail
                  deleteRecipe={deleteRecipe}
                  editRecipe={editRecipe}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </main>
    </RecipesContext.Provider>
  );
}

// Now it is its own Component Recipe.jsx
// function Recipe(props) {
//   return <p>{props.recipe.title}</p>;
// }

export default App;
