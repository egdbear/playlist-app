import request from '../../services/request';
import { itunesTopAlbums } from '../../services/urls';
import { add, get } from '../../services/localStorage';

export const REQUEST_ITUNES_ALBUMS = 'ITUNES/REQUEST_ALBUMS';
export const RECEIVE_ITUNES_ALBUMS = 'ITUNES/RECIEVE_ALBUMS';

export const REQUEST_ITUNES_ALBUM_DETAILS = 'ITUNES/REQUEST_ALBUM_DETAILS';
export const RECEIVE_ITUNES_ALBUM_DETAILS = 'ITUNES/RECIEVE_ALBUM_DETAILS';

export const requestItunes = () => ({
  type: REQUEST_ITUNES_ALBUMS,
});

export const receiveItunes = feed => ({
  type: RECEIVE_ITUNES_ALBUMS,
  payload: feed,
});

export const requestAlbumDetails = () => ({
  type: REQUEST_ITUNES_ALBUM_DETAILS,
});

export const receiveAlbumDetails = albumDetails => ({
  type: RECEIVE_ITUNES_ALBUM_DETAILS,
  payload: { albumDetails },
});

export const fetchItunes = () => (dispatch) => {
  dispatch(requestItunes());
  const cache = JSON.parse(get(itunesTopAlbums));

  if (cache) {
    return dispatch(receiveItunes(cache));
  }

  return request(itunesTopAlbums)
    .then((feed) => {
      add(itunesTopAlbums, feed);
      dispatch(receiveItunes(feed));
    });
};

export const fetchAlbumDetails = url => (dispatch) => {
  dispatch(requestAlbumDetails());
  return request(url)
    .then((albumDetails) => {
      return dispatch(receiveAlbumDetails(albumDetails));
    });
};
