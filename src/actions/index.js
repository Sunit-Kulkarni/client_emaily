import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
  //action creator called
  //redux thunk see return function an will have dispatch
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
  //wait until response gets back from api and only then will the action be dispatched
  //payload is axios response object
};
