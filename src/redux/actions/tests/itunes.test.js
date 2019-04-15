import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import request from '../../../services/request';

import {
  fetchItunes,
  fetchAlbumDetails,
  REQUEST_ITUNES_ALBUMS,
  RECEIVE_ITUNES_ALBUMS,
  REQUEST_ITUNES_ALBUM_DETAILS,
  RECEIVE_ITUNES_ALBUM_DETAILS,
} from '../itunes';

jest.mock('../../../services/request');

const mockStore = configureStore([thunk]);

const initialState = {
  itunes: {
    isFetching: false,
    feed: [],
    albumDetails: {},
  },
};

beforeEach(() => {
  jest.resetModules();
  jest.resetAllMocks();
});

describe('itunes actions', () => {
  it('should send REQUEST_ITUNES_ALBUMS, RECEIVE_ITUNES_ALBUMS actions', () => {
    const store = mockStore(initialState);
    request
      .mockResolvedValueOnce({
        feed: [{ test: 'test' }],
      });

    return store
      .dispatch(fetchItunes())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toBe(REQUEST_ITUNES_ALBUMS);

        expect(actions[1].type).toBe(RECEIVE_ITUNES_ALBUMS);
        expect(actions[1].payload).toEqual({
          feed: [{ test: 'test' }],
        });
      });
  });

  it('should send REQUEST_ITUNES_ALBUM_DETAILS RECEIVE_ITUNES_ALBUM_DETAILS actions', () => {
    const store = mockStore(initialState);
    request
      .mockResolvedValueOnce({
        results: [{ artist: 'test' }],
      });

    return store
      .dispatch(fetchAlbumDetails())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toBe(REQUEST_ITUNES_ALBUM_DETAILS);

        expect(actions[1].type).toBe(RECEIVE_ITUNES_ALBUM_DETAILS);
        expect(actions[1].payload).toEqual({
          albumDetails: { results: [{ artist: 'test' }] },
        });
      });
  });
});
