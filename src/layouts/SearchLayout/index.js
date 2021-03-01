import React, { useState } from 'react';
import clsx from 'clsx';
import useDebounceEffect from 'src/hooks/useDebounceEffect';
import { Search as SearchIcon } from 'react-feather';
import Logo from 'src/components/Logo';
import StyledHeader from './styles';

const Search = ({ children, className, ...props }) => {
  const [searchtext, setSearchText] = useState('');
  const [debounceDep, setDebounceDep] = useState(true);

  const onSearch = () => {
    // setDebounceDep((prev) => !prev);
    console.log('searcchchch');
  };

  useDebounceEffect(onSearch, [debounceDep], 300);

  // Render react
  return (
    <StyledHeader className={clsx(className)} {...props}>
      <div className="search-container">
        <Logo />
        <div className="search-box">
          <span>r/</span>
          <input
            type="text"
            value={searchtext}
            className="search-input"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={onSearch} className="submit-btn">
            <SearchIcon />
          </button>
        </div>
      </div>
      {children}
    </StyledHeader>
  );
};

export default Search;
