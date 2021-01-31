import React, { useState, useContext } from 'react';

export const ThemeContext = React.createContext();
export const ThemeUpdateContext = React.createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
}

export const useThemeUpdate = () => {
  return useContext(ThemeUpdateContext);
}

const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);

  const updateTheme = () => setDarkTheme(!darkTheme);

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={updateTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;