import window from 'global/window';

export const add = (key, data) =>
  window && window.localStorage && window.localStorage.setItem(key, JSON.stringify(data));

export const get = key =>
  window && window.localStorage && window.localStorage.getItem(key);
