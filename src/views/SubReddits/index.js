import React, { useCallback, useEffect } from 'react';

// Utilities
import { useParams } from 'react-router';
import axios from 'axios';

// Actions
import actions from 'src/actions/searchActions.js';

// Context
import { useSearch } from 'src/contexts/SearchContext.js';

// Custom Hooks
import useIsMountedRef from 'src/hooks/useIsMountedRef.js';

// Sub-components
import SubReddit from './SubReddit.js';

// Material Components
import { IconButton, Tooltip } from '@material-ui/core';

// Material Icons
import {
  ArrowBackIos as PrevPageIcon,
  ArrowForwardIos as NextPageIcon
} from '@material-ui/icons';

// Styled-components
import {
  StyledImageGrid,
  StyledContainer,
  StyledPaginationContainer
} from './styles.js';

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
        dispatch({ type: actions.SET_RETRY, payload: false });
        const response = await axios.get(`${URL}${srName}.json?raw_json=1`);

        if (isMountedRef.current) {
          const previewableFiles = response?.data?.data?.children.filter(
            (file) => file?.data?.preview?.enabled
          );
          dispatch({
            type: actions.SET_CURRENT_FILES,
            payload: previewableFiles
          });
          dispatch({
            type: actions.SET_AFTER,
            payload: response?.data?.data?.after
          });
          dispatch({
            type: actions.SET_BEFORE,
            payload: response?.data?.data?.before
          });
        }
      } catch (err) {
        dispatch({ type: actions.SET_RETRY, payload: false });
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
        dispatch({
          type: actions.SET_CURRENT_FILES,
          payload: response?.data?.data?.children
        });
        dispatch({
          type: actions.SET_AFTER,
          payload: response?.data?.data?.after
        });
        dispatch({
          type: actions.SET_BEFORE,
          payload: response?.data?.data?.before
        });
        dispatch({
          type: actions.SET_CURRENT_PAGE,
          payload: state.currentPage + 1
        });
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
        dispatch({
          type: actions.SET_CURRENT_FILES,
          payload: response?.data?.data?.children
        });
        dispatch({
          type: actions.SET_AFTER,
          payload: response?.data?.data?.after
        });
        dispatch({
          type: actions.SET_BEFORE,
          payload: response?.data?.data?.before
        });
        if (state.currentPage > 1) {
          dispatch({
            type: actions.SET_CURRENT_PAGE,
            payload: state.currentPage - 1
          });
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
    if (!srName) return;
    searchSubreddit(srName);
  }, [srName, searchSubreddit]);

  if (!state?.files)
    return (
      <StyledContainer>
        <h3>Nothing to show here!</h3>
      </StyledContainer>
    );

  return (
    <div className="image-grid__container">
      <StyledImageGrid className="image-grid">
        {state.files.map((file) => (
          <SubReddit key={file.data.id} file={file} />
        ))}
      </StyledImageGrid>
      <StyledPaginationContainer display="flex" justifyContent="space-between">
        <Tooltip title="Previous Page" aria-labelledby="prev-page">
          <IconButton
            onClick={() => getPrevPage(srName)}
            disabled={!state.before}
          >
            <PrevPageIcon size="large" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Next Page" aria-labelledby="next-page">
          <IconButton
            onClick={() => getNextPage(srName)}
            disabled={!state.after}
          >
            <span>
              <NextPageIcon size="large" />
            </span>
          </IconButton>
        </Tooltip>
      </StyledPaginationContainer>
    </div>
  );
};

export default SubReddits;
