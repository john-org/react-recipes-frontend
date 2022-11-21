import React from "react";

import Button from "./Button";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavStyles = styled.nav`
  --bg-color: #007eb6;
  --btn-color: var(--blue-dark);
  min-height: 3rem;
  background-color: var(--bg-color);
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  a {
    color: #fff;
    padding: 1rem;
    font-size: 2rem;
    text-decoration: none;
  }
`;

const Nav = ({ setLoggedin, loggedin }) => {
  return (
    <NavStyles>
      <h1>
        <Link to="/">Recipes</Link>
      </h1>
      {/* Replaced by Button Styled Component */}
      {/* {loggedin ? (
        <button onClick={() => setLoggedin(false)}>Log Out</button>
      ) : (
        <button onClick={() => setLoggedin(true)}>Log In</button>
      )} */}
      {/* Button Styled Component */}
      {/* {loggedin ? (
        <Button func={() => setLoggedin(false)}>Log Out</Button>
      ) : (
        <Button func={() => setLoggedin(true)}>Log In</Button>
      )} */}
      {/* Button Styled Component with Custom Hook */}
      <Button func={setLoggedin}>{loggedin ? "Log Out" : "Log In"}</Button>
    </NavStyles>
  );
};

export default Nav;
