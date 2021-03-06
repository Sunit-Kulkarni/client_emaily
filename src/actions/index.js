import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS } from './types';

export const fetchUser = () => async dispatch => {
  //action creator called
  //redux thunk see return function and will have dispatch
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
  //wait until response gets back from api and only then will the action be dispatched
  //type of action dispatched is FETCH_USER
  //payload is axios response object
};

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);
  dispatch({ type: FETCH_USER, payload: res.data });
  //dispatch updates user model in authreducer
  //this action creator posts the stripe token to the backend
};

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values);
  history.push('/surveys');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get('/api/surveys');

  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};

export const getMap = () => async dispatch => {
  const res = await axios.get('/map/cities');

  dispatch({ type: FETCH_USER, payload: res.data });
};
