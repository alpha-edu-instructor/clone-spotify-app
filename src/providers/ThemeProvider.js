import { useState, createContext, useContext } from "react";

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider(props) {
  const [isLightTheme, setIsLightTheme] = useState(() => {
    const storedTheme = localStorage.getItem("isLight");
    return storedTheme === "true" ? true : false;
  });

  function toggleTheme() {
    setIsLightTheme(!isLightTheme);
    localStorage.setItem("isLight", !isLightTheme);
  }

  return (
    <ThemeContext.Provider value={{ isLightTheme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
