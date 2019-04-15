import {
  REQUEST_ITUNES_ALBUMS,
  RECEIVE_ITUNES_ALBUMS,
  REQUEST_ITUNES_ALBUM_DETAILS,
  RECEIVE_ITUNES_ALBUM_DETAILS,
} from '../actions/itunes';

export default (state = {
  isFetching: false,
  feed: [],
  albumDetails: {},
}, action) => {
  switch (action.type) {
    case REQUEST_ITUNES_ALBUMS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_ITUNES_ALBUMS:
      return {
        ...state,
        isFetching: false,
        feed: action.payload.feed,
      };
    case REQUEST_ITUNES_ALBUM_DETAILS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_ITUNES_ALBUM_DETAILS:
      return {
        ...state,
        isFetching: false,
        albumDetails: action.payload.albumDetails,
      };
    default:
      return state;
  }
};
