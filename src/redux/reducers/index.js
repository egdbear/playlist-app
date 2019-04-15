import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import itunes from './itunes';

export default history => combineReducers({
  router: connectRouter(history),
  itunes,
});
