import { MapAPI } from '../API/api';
import { stopSubmit, clearSubmitErrors } from 'redux-form';

const SET_COORDINATES = 'SET-COORDINATES';

const initialState = {
  latitude: 55.7522200,
  longitude: 37.6155600,
  id: 0
};

const mapReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_COORDINATES:
      return {...state,
        latitude: action.latitude,
        longitude: action.longitude,
        id: action.id
      };

    default: return state;  
  }
};

// ACTION CREATOR
export const setCoordinates = (latitude, longitude, id) => ({type: SET_COORDINATES, latitude, longitude, id});

// THUNK CREATOR
export const getData = (places) => (dispatch) => {
  MapAPI.getData(places)
    .then(response => {
      if(response.status === 200 && response.data.features.length !== 0) {
        const longitude = response.data.features[0].center[0],
              latitude = response.data.features[0].center[1],
              id = response.data.features[0].id;
        dispatch(setCoordinates(latitude, longitude, id));
        dispatch(clearSubmitErrors("map"));
      } else {
        let message = 'Place not found';
        dispatch(stopSubmit("map", {_error: message}));
      }
    });
};

export default mapReducer;