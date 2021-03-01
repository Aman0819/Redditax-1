import React, { useState } from 'react';
import '../assets/search.css';
import { Search as SearchIcon } from 'react-feather';

function Search(props) {
  const [searchtext, setSearchText] = useState('');

  function onSearchSubmit(event) {
    event.preventDefault();
    props.onSubmit(searchtext);
  }

  return (
    <div className="search-container">
      <form onSubmit={onSearchSubmit} className="search-box">
        <span>r/</span>
        <input
          type="text"
          className="search-input"
          value={searchtext}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button type="submit" className="submit-btn">
          <SearchIcon fontSize="large" />
        </button>
      </form>
    </div>
  );
}

export default Search;
