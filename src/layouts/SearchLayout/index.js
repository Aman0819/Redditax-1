import React, { useEffect } from 'react';

// Utilities
import clsx from 'clsx';

// Material Icons
import { Search as SearchIcon } from '@material-ui/icons';

// Custom Components
import Logo from 'src/components/Logo';

// Styled Components
import StyledHeader from './styles';

// Context
import { useSearch } from 'src/contexts/SearchContext';

// Actions
import actions, { setCurrentSubreddit } from 'src/actions/searchActions';
import { useHistory } from 'react-router';

const Search = ({ children, className, ...props }) => {
  const [state, dispatch] = useSearch();
  const history = useHistory();

  const handleRedirect = () => {
    localStorage.setItem('searchTerm', state.currentSubreddit);
    history.push('/subreddits/' + state.currentSubreddit);

    // Getting Previous Searches from LocalStorage
    let previousSearches = localStorage.getItem('previousSearches');

    previousSearches = !!previousSearches ? JSON.parse(previousSearches) : [];

    // Checking if the list already includes current Search Term
    if (
      previousSearches.find(
        (prev) => prev.toLowerCase() === state.currentSubreddit.toLowerCase()
      )
    )
      return;

    // Checking if there already exists a list or not
    previousSearches = !previousSearches
      ? [state.currentSubreddit]
      : [...previousSearches, state.currentSubreddit];

    // Checking if the list is larger than 6 items
    previousSearches =
      previousSearches.length > 6
        ? previousSearches.slice(-6)
        : previousSearches;

    // Updating the list or creating one for previous search terms
    localStorage.setItem('previousSearches', JSON.stringify(previousSearches));
  };

  useEffect(() => {
    const searchTerm = localStorage.getItem('searchTerm');
    if (!searchTerm) return;
    dispatch(setCurrentSubreddit(searchTerm));
  }, [dispatch]);

  // Render JSX
  return (
    <StyledHeader className={clsx(className)} {...props}>
      <div className="search-container">
        <Logo />
        <form className="search-box" onSubmit={(e) => e.preventDefault()}>
          <span>r/</span>
          <input
            type="text"
            value={state.currentSubreddit}
            className="search-input"
            onChange={(e) =>
              dispatch({
                type: actions.SET_CURRENT_SUBREDDIT,
                payload: e.target.value
              })
            }
          />
          <button onClick={handleRedirect} className="submit-btn">
            <SearchIcon />
          </button>
        </form>
      </div>
      {children}
    </StyledHeader>
  );
};

export default Search;
