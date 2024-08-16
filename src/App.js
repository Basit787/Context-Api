import React from "react";
import ThemeContext from "./ThemeContext";
import Theme from "./Theme";

const App = () => {
  return (
    <ThemeContext>
      <Theme />
    </ThemeContext>
  );
};

export default App;
