import React, { useContext } from "react";
import { ThemeContextProvider } from "./ThemeContext";

const Theme = () => {
  const { value, btn } = useContext(ThemeContextProvider);
  return (
    <div style={{ backgroundColor: value === "light" ? "white" : "black" }}>
      <h1 style={{ color: value === "light" ? "black" : "white" }}>
        This is context api testing
      </h1>
      <p style={{ color: value === "light" ? "black" : "white" }}>
        The mode is : {value}
      </p>
      <button onClick={btn}>Change Theme</button>
    </div>
  );
};

export default Theme;
