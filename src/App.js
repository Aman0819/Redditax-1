import React from 'react';
import { Router } from 'react-router-dom';

// Providers
import { ThemeProvider } from 'styled-components';
import SearchProvider from 'src/contexts/SearchContext';

// Theme
import theme from 'src/theme';

// Utilities
import { createBrowserHistory } from 'history';

// Custom Components
import TitleComponent from './components/Title/';

// Routes
import routes, { renderRoutes } from './routes';

// React Component
function App() {
  const history = createBrowserHistory();

  // Render React
  return (
    <ThemeProvider theme={theme}>
      <SearchProvider>
        <Router history={history}>
          <TitleComponent title="Redditax" />
          {renderRoutes(routes)}
        </Router>
      </SearchProvider>
    </ThemeProvider>
  );
}

export default App;
