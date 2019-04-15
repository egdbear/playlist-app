import {
  REQUEST_ITUNES_ALBUMS,
  RECEIVE_ITUNES_ALBUMS,
  REQUEST_ITUNES_ALBUM_DETAILS,
  RECEIVE_ITUNES_ALBUM_DETAILS,
} from '../../actions/itunes';

import itunesReducer from '../itunes';

const initialState = {
  isFetching: false,
  feed: [],
  albumDetails: {},
};

it('handle REQUEST_ITUNES_ALBUMS', () => {
  expect(itunesReducer(initialState, {
    type: REQUEST_ITUNES_ALBUMS,
  }))
    .toEqual({
      isFetching: true,
      feed: [],
      albumDetails: {},
    });
});

it('handle RECEIVE_ITUNES_ALBUMS', () => {
  expect(itunesReducer(initialState, {
    type: RECEIVE_ITUNES_ALBUMS,
    payload: { feed: { test: 'test' } },
  }))
    .toEqual({
      isFetching: false,
      feed: { test: 'test' },
      albumDetails: {},
    });
});

it('handle REQUEST_ITUNES_ALBUM_DETAILS', () => {
  expect(itunesReducer(initialState, {
    type: REQUEST_ITUNES_ALBUM_DETAILS,
  }))
    .toEqual({
      ...initialState,
      isFetching: true,
    });
});

it('handle RECEIVE_ITUNES_ALBUM_DETAILS', () => {
  expect(itunesReducer(initialState, {
    type: RECEIVE_ITUNES_ALBUM_DETAILS,
    payload: { albumDetails: { amazing: true } },
  }))
    .toEqual({
      ...initialState,
      isFetching: false,
      albumDetails: { amazing: true },
    });
});
