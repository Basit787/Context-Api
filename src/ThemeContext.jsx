import React, { createContext, useState } from "react";

export const ThemeContextProvider = createContext();

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContextProvider.Provider value={{ value: theme, btn: toggleTheme }}>
      {children}
    </ThemeContextProvider.Provider>
  );
};

export default ThemeContext;
