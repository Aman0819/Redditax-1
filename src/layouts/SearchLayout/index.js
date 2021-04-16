import React from 'react';

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
import actions from 'src/actions/searchActions';
import { useHistory } from 'react-router';

const Search = ({ children, className, ...props }) => {
  const [state, dispatch] = useSearch();
  const history = useHistory();

  const handleRedirect = () => {
    history.push('subreddits/' + state.currentSubreddit);
  };

  // Render JSX
  return (
    <StyledHeader className={clsx(className)} {...props}>
      <div className="search-container">
        <Logo />
        <div className="search-box">
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
        </div>
      </div>
      {children}
    </StyledHeader>
  );
};

export default Search;
