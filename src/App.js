import React from 'react'; // { useCallback, useEffect, useState, useRef }
import { Router } from 'react-router-dom';

// Providers
import { ThemeProvider } from 'styled-components';
import SearchProvider from 'src/contexts/SearchContext';

// Theme
import theme from 'src/theme';

// Utilities
// import axios from 'axios';
import { createBrowserHistory } from 'history';

// Custom hooks
// import useIsMountedRef from './hooks/useIsMountedRef';

// Custom Components
import TitleComponent from './components/Title/';
// import Search from './views/Search';
// import CardGrid from './views/Home';
// import ImageGrid from './views/ImageGrid';

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
          {/* <div className="App">
        <Search onSubmit={searchSubreddit} />
        <h1 onClick={resetSubreddit} id="logo">
        <span aria-hidden="true">Redditax</span> <span>Reddit</span>ax
        <span aria-hidden="true">Redditax</span>
        </h1>
        {!currentSubreddit ? (
          <CardGrid />
          ) : (
            <ImageGrid
            files={files}
            getPrevPage={getPrevPage}
            getNextPage={getNextPage}
            />
            )}
          </div> */}
          <TitleComponent title="Redditax" />
          {renderRoutes(routes)}
        </Router>
      </SearchProvider>
    </ThemeProvider>
  );
}

export default App;
