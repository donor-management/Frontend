import axios from 'axios';

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response && error.response.status >= 400 && error.response.status < 500;

  if (!expectedError) {
    // log error and notify user
    console.log(error);
  }

  return Promise.reject(error);
});

function setToken(token) {
  axios.defaults.headers.common['Authorization'] = token;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setToken
};
