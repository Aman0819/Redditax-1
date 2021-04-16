import React, { createContext, useContext, useReducer } from 'react';

import reducer, { initialState } from '../reducers/rootreducer';

// Creating a context
const SearchContext = createContext();

export function useSearch() {
  return useContext(SearchContext);
}

export default function SearchProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Render react
  return (
    <SearchContext.Provider value={[state, dispatch]}>
      {children}
    </SearchContext.Provider>
  );
}
