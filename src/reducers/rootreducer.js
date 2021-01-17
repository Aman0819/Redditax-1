import ACTIONS from '../actions/actions';

export const initialState = {
  currentSubreddit: '',
  currentPage: 1,
  itemsPerPage: 25,
  after: null,
  before: null
};

export default function reducer(state, actions) {
  switch (actions.type) {
    case ACTIONS.SET_CURRENT_SUBREDDIT:
      console.log('idek');
      break;
    default:
      break;
  }
}
