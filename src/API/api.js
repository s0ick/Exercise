import * as Axios from 'axios';

const instance = Axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/'
});

const TOKEN = "pk.eyJ1IjoiczBpY2siLCJhIjoiY2tmZjY3MGpyMGJyODJ5bzN5Z21icnM4MiJ9.QU7ztvttw-WtT9I22Kd8dQ";

export const MapAPI = {
  getData(places) {
    return instance
    .get(`mapbox.places/${places}.json?access_token=${TOKEN}`);
  }
};