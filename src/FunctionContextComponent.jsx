import React from 'react';
import { useTheme, useThemeUpdate } from './ThemeProvider';

const FunctionContextComponent = () => {
  const darkTheme = useTheme();
  const updateTheme = useThemeUpdate();
  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? '#CCC' : '#333',
    padding: '2rem',
    margin: '2rem',
  };
  const buttonStyle = {
    padding: '1rem',
    margin: '1rem'
  }

  return (
    <div>
      <button style={buttonStyle} onClick={updateTheme}>Toggle Button</button>
      <div style={themeStyles}>
        Function Theme
      </div>
    </div>
  );
};

export default FunctionContextComponent;