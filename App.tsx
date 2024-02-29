import React from 'react';
import SimpleInterestScreen from './src/screens/SimpleInterest';
import { ThemeProvider } from 'styled-components';
import theme from './src/resources/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SimpleInterestScreen />
    </ThemeProvider>
  );
};

export default App;
