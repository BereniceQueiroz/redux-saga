import { ThemeProvider } from 'styled-components';
import Router from './router';

import GlobalStyle from 'styles/global';
import theme from 'styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
