import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Not needed because using Recipes Component now below
// import Recipe from "./Recipe";
import Recipes from "./Recipes";
import RecipeDetail from "./RecipeDetail";
import Nav from "./Nav";

import { useFetch } from "./hooks/useFetch";
import useToggle from "./hooks/useToggle";

function App() {
  // Now it is its own Component Recipe.jsx
  //   const [recipes, setRecipes] = React.useState([]);

  // Logged In state using React useState
  //   const [loggedin, setLoggedin] = React.useState(false);

  // Logged In status using React Custom Hooks
  const [loggedin, setLoggedin] = useToggle(false);

  const { loading, data: recipes, error } = useFetch(`/api/recipes`);

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

  return (
    <main>
      <BrowserRouter>
        {/* Uses Custom Hook */}
        <Nav setLoggedin={setLoggedin} loggedin={loggedin} />

        <Routes>
          <Route
            path="/"
            element={<Recipes recipes={recipes} loggedin={loggedin} />}
          />
          <Route
            path="/:recipeId"
            element={<RecipeDetail recipes={recipes} />}
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

// Now it is its own Component Recipe.jsx
// function Recipe(props) {
//   return <p>{props.recipe.title}</p>;
// }

export default App;
