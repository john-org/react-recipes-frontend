import React from "react";
import Recipes from "./Recipes";
import RecipeDetail from "./RecipeDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useFetch } from "./hooks/useFetch";
import Nav from "./Nav";
import useToggle from "./hooks/useToggle";

import RecipesContext from "./RecipesContext";

function App() {
  const [recipes, setRecipes] = React.useState([]);
  const [loggedin, setLoggedin] = useToggle(true);
  const [loading, setLoading] = useToggle(true);
  const [error, setError] = React.useState("");
  const { get, post, del, put } = useFetch(`/api/recipes`);

  const addRecipe = (recipe) => {
    post("/api/recipes", recipe).then((data) => {
      setRecipes([data, ...recipes]);
    });
  };

  const deleteRecipe = (recipeId) => {
    console.log("recipeId:", recipeId);
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
                  editRecipe={editRecipe}
                  deleteRecipe={deleteRecipe}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </main>
    </RecipesContext.Provider>
  );
}

export default App;
