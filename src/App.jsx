import React from 'react';
import FunctionContextComponent from './FunctionContextComponent';
import ThemeProvider from './ThemeProvider';

const App = () => { 
  return (
    <ThemeProvider>
      <FunctionContextComponent />
    </ThemeProvider>
  );
};

export default App;