import React, { useCallback, useEffect } from 'react';

// Utilities
import { useParams } from 'react-router';
import axios from 'axios';

// Actions
import {
  setAfter,
  setBefore,
  setCurrentPage,
  setCurrentSubreddit,
  setFiles,
  setRetry
} from 'src/actions/searchActions.js';

// Context
import { useSearch } from 'src/contexts/SearchContext.js';

// Custom Hooks
import useIsMountedRef from 'src/hooks/useIsMountedRef.js';

// Sub-components
import SubReddit from './SubReddit.js';

// Material Components
import { IconButton, Tooltip, Typography } from '@material-ui/core';

// Material Icons
import {
  ArrowBackIos as PrevPageIcon,
  ArrowForwardIos as NextPageIcon
} from '@material-ui/icons';

// Styled-components
import {
  StyledImageGrid,
  StyledPaginationContainer,
  StyledHeader,
  StyledLinearProgress,
  PreviousSearchesContainer
} from './styles.js';
import { Link } from 'react-router-dom';

// Proxies for API
const URL = 'https://www.reddit.com/r/';
// const CORS_PROXY = 'https://cors-anywhere-herokuapp.com/';

const SubReddits = () => {
  const [state, dispatch] = useSearch();
  const isMountedRef = useIsMountedRef();
  const { srName } = useParams();

  const searchSubreddit = useCallback(
    async (srName) => {
      try {
        setRetry(false);
        const response = await axios.get(`${URL}${srName}.json?raw_json=1`);

        if (isMountedRef.current) {
          const previewableFiles = response?.data?.data?.children.filter(
            (file) => file?.data?.preview?.enabled
          );
          dispatch(setFiles(previewableFiles));
          dispatch(setAfter(response?.data?.data?.after));
          dispatch(setBefore(response?.data?.data?.before));
        }
      } catch (err) {
        dispatch(setRetry(true));
        console.error(err);
      }
    },
    [isMountedRef, dispatch]
  );

  const getNextPage = useCallback(
    async (srName) => {
      const response = await axios.get(
        `${URL}${srName}.json?count=${
          state.currentPage * state.itemsPerPage
        }&after=${state.after}&raw_json=1`
      );

      if (isMountedRef.current) {
        const previewableFiles = response?.data?.data?.children.filter(
          (file) => file?.data?.preview
        );
        dispatch(setFiles(previewableFiles));
        dispatch(setAfter(response?.data?.data?.after));
        dispatch(setBefore(response?.data?.data?.before));
        dispatch(setCurrentPage(state.currentPage + 1));
      }

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    },
    [isMountedRef, dispatch, state]
  );

  const getPrevPage = useCallback(
    async (srName) => {
      const response = await axios.get(
        `${URL}${srName}.json?count=${
          (state.currentPage - 1) * 25 - 1
        }&before=${state.before}&raw_json=1`
      );

      if (isMountedRef.current) {
        const previewableFiles = response?.data?.data?.children.filter(
          (file) => file?.data?.preview?.enabled
        );
        dispatch(setFiles(previewableFiles));
        dispatch(setAfter(response?.data?.data?.after));
        dispatch(setBefore(response?.data?.data?.before));

        if (state.currentPage > 1) {
          dispatch(setCurrentPage(state.currentPage - 1));
        }
      }
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    },
    [isMountedRef, dispatch, state]
  );

  useEffect(() => {
    dispatch(setCurrentSubreddit(''));
    if (!srName) return;
    searchSubreddit(srName);
  }, [srName, searchSubreddit, dispatch]);

  const renderPreviousSearches = () => {
    const previousSearches = localStorage.getItem('previousSearches');
    if (!previousSearches?.length) return;
    return (
      <PreviousSearchesContainer>
        Your Previous Searches:
        {JSON.parse(previousSearches).map((prev) => (
          <Link to={'/subreddits/' + prev} className="search-term">
            {prev}
          </Link>
        ))}
      </PreviousSearchesContainer>
    );
  };

  const renderImageGrid = () =>
    !state?.files?.length ? (
      <StyledLinearProgress />
    ) : (
      <React.Fragment>
        <StyledHeader>
          <h3>Posts from r/{srName.toLowerCase()}</h3>
          {!!localStorage?.previousSearches?.length && renderPreviousSearches()}
          <StyledPaginationContainer
            display="flex"
            justifyContent="space-between"
          >
            <Tooltip title="Previous Page" aria-labelledby="prev-page">
              <span>
                <IconButton
                  onClick={() => getPrevPage(srName)}
                  disabled={!state.before}
                >
                  <PrevPageIcon size="large" />
                </IconButton>
              </span>
            </Tooltip>
            <Typography variant="h5">Page {state.currentPage}</Typography>
            <Tooltip title="Next Page" aria-labelledby="next-page">
              <span>
                <IconButton
                  onClick={() => getNextPage(srName)}
                  disabled={!state.after}
                >
                  <NextPageIcon size="large" />
                </IconButton>
              </span>
            </Tooltip>
          </StyledPaginationContainer>
        </StyledHeader>
        <StyledImageGrid className="image-grid">
          {state.files.map((file) => (
            <SubReddit key={file.data.id} file={file} />
          ))}
        </StyledImageGrid>
        <StyledPaginationContainer
          display="flex"
          justifyContent="space-between"
        >
          <Tooltip title="Previous Page" aria-labelledby="prev-page">
            <span>
              <IconButton
                onClick={() => getPrevPage(srName)}
                disabled={!state.before}
              >
                <PrevPageIcon size="large" />
              </IconButton>
            </span>
          </Tooltip>
          <Typography variant="h5">Page {state.currentPage}</Typography>
          <Tooltip title="Next Page" aria-labelledby="next-page">
            <span>
              <IconButton
                onClick={() => getNextPage(srName)}
                disabled={!state.after}
              >
                <NextPageIcon size="large" />
              </IconButton>
            </span>
          </Tooltip>
        </StyledPaginationContainer>
      </React.Fragment>
    );

  return <div className="image-grid__container">{renderImageGrid()}</div>;
};

export default SubReddits;
