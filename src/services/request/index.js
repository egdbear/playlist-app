import fetch from 'cross-fetch';

const isResponseOK = (response) => {
  if (response.ok) {
    return response.json();
  }
  throw new Error(response.statusText);
};

export default url =>
  new Promise((resolve, reject) => {
    fetch(url, { mode: 'cors' })
      .then(isResponseOK)
      .then(data => resolve(data))
      .catch((error) => {
        reject(error);
      });
  });
