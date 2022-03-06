import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import Router from './router';

import GlobalStyle from 'styles/global';
import theme from 'styles/theme';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
