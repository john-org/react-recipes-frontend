import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// import useToggle from "./hooks/useToggle";

// Learning React Custom Hooks
// function Toggler() {
//   const [isHappy, toggleIsHappy] = useToggle(true);
//   const [isBanana, toggleIsBanana] = useToggle(true);

//   return (
//     <div>
//       <h1 onClick={toggleIsHappy}>{isHappy ? "😄" : "😢"}</h1>
//       <h1 onClick={toggleIsBanana}>{isBanana ? "🍌" : "👹"}</h1>
//     </div>
//   );
// }

const container = document.getElementById("root");
const root = createRoot(container);

// root.render(<Toggler />);

root.render(<App />);
