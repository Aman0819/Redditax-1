import ACTIONS from '../actions/searchActions';

export const initialState = {
  currentSubreddit: '',
  currentPage: 1,
  itemsPerPage: 25,
  after: null,
  before: null,
  retry: false,
  files: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.SET_CURRENT_SUBREDDIT: {
      const { payload } = action;
      return {
        ...state,
        currentSubreddit: payload
      };
    }
    case ACTIONS.SET_CURRENT_PAGE: {
      const { payload } = action;
      return {
        ...state,
        currentPage: payload
      };
    }
    case ACTIONS.SET_AFTER: {
      const { payload } = action;
      return {
        ...state,
        after: payload
      };
    }
    case ACTIONS.SET_BEFORE: {
      const { payload } = action;
      return {
        ...state,
        before: payload
      };
    }
    case ACTIONS.SET_RETRY: {
      const { payload } = action;
      return {
        ...state,
        retry: !!payload
      };
    }
    case ACTIONS.SET_FILES: {
      const { payload } = action;
      return {
        ...state,
        files: payload
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}
