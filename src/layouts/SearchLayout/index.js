import React, { useState } from 'react';

// Modular Scss
import classes from './search.module.scss';

// Material Components
import { Box } from '@material-ui/core';

// Import Material Icons
import { Search as SearchIcon } from '@material-ui/icons';

const Search = ({ children, className, ...rest }) => {
  const [searchtext, setSearchText] = useState('');

  function onSearchSubmit(event) {
    event.preventDefault();
    // onSubmit(searchtext);
  }

  console.log(searchtext);

  // Render react
  return (
    <Box className={className}>
      <div className={classes['search-container']}>
        <form onSubmit={onSearchSubmit} className={classes['search-box']}>
          <span>r/</span>
          <input
            type="text"
            className={classes['search-input']}
            value={searchtext}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button type="submit" className={classes['submit-btn']}>
            <SearchIcon fontSize="large" />
          </button>
        </form>
      </div>
      {children}
    </Box>
  );
};

export default Search;
