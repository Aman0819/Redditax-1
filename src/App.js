import React from 'react'; // { useCallback, useEffect, useState, useRef }
import { Router } from 'react-router-dom';

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

// Material Components
import { ThemeProvider } from '@material-ui/core';

// Material theme
import theme from './theme';

// Routes
import routes, { renderRoutes } from './routes';

// Proxies for API
// const URL = 'https://www.reddit.com/r/';
// const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

// React Component
function App() {
  const history = createBrowserHistory();

  // Render React
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
