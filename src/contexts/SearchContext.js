import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useReducer
} from 'react';

import reducer, { initialState } from '../reducers/rootreducer';

// Custom hooks
// import useIsMountedRef from '../hooks/useIsMountedRef';

// Creating a context
const SearchContext = createContext();

export function useSearch() {
  return useContext(SearchContext);
}

export function SearchProvider({ children }) {
  // const isMountedRef = useIsMountedRef();
  const [state, dispatch] = useReducer(reducer, initialState);

  // Refs
  const after = useRef(null);
  const before = useRef(null);
  const itemsPerPage = useRef(25);

  // States
  const [currentSubreddit, setCurrentSubreddit] = useState('');
  const [files, setFiles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [retry, setRetry] = useState(false);

  // Render react
  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
}
