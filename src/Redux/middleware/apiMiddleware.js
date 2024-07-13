import axios from 'axios';

const apiMiddleware = ({ dispatch }) => next => async action => {
  if (action.type !== 'API') {
    return next(action);
  }

  const { url, method, data, onSuccess, onError } = action.payload;

 await axios({
    method,
    url,
    data
  })
  .then(response => {
    dispatch({ type: onSuccess, payload: response.data });
  })
  .catch(error => {
    dispatch({ type: onError, payload: error });
  });
};

export default apiMiddleware;
