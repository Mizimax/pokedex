import React from 'react';
import { ThemeProvider } from 'styled-components';

import { default as PokedexRoute } from './Routes/Pokedex';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PokedexRoute />
    </ThemeProvider>
  );
}

export default App;
