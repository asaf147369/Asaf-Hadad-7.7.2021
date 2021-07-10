import { createSlice } from '@reduxjs/toolkit';
import {
  getLocationApi,
  getWeatherApi,
  getForecastApi,
  getCurrentByGeoLocation,
} from './weatherApi';
import { v4 as uuidv4 } from 'uuid';

import { State } from "../interfaces/State";
import { Fav } from '../interfaces/Fav';
import { Current } from '../interfaces/Current';

const initialState:Readonly<State> = {
  places: [],
  weather: {},
  current: {
    location: null,
    weather: null,
    forecast: [],
  },
  favorites: [],
  loading: false,
  error: '',
};

export const weatherSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    handleFavorite: (state: State, { payload }: { payload: any }) => {
      let exist:boolean;
      if(state.favorites) {
        exist = state.favorites.some((fav) => fav.location.Key === payload.location.Key);
      } else {
        exist = false;
      }

      if (exist) {
        state.favorites = state.favorites.filter(
          (fav) => fav.location.Key !== payload.location.Key
        );
      } else {
        const fav:Fav = {
          id: uuidv4(),
          locationName: payload.location.LocalizedName,
          ...payload,
        }
        state.favorites.push(fav);
      }
    },
    changeCurrent: (state:State, { payload }: {payload: Current}) => {
      state.current = payload;
    },
  },
  extraReducers: {
    [getLocationApi.pending.toString()]: (state:State) => {
      state.loading = true;
      state.error = '';
    },
    [getLocationApi.fulfilled.toString()]: (state:State, { payload }) => {
      state.loading = false;
      state.places = payload;
    },
    [getLocationApi.rejected.toString()]: (state:State, { error }) => {
      state.loading = false;
      state.error = error.message;
    },
    [getWeatherApi.pending.toString()]: (state:State) => {
      state.loading = true;
      state.error = '';
    },
    [getWeatherApi.fulfilled.toString()]: (state:State, { payload }) => {
      state.loading = false;
      state.current.location = payload.location;
      state.current.weather = payload.weather;
    },
    [getWeatherApi.rejected.toString()]: (state:State, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getForecastApi.pending.toString()]: (state:State) => {
      state.loading = true;
      state.error = '';
    },
    [getForecastApi.fulfilled.toString()]: (state:State, { payload }) => {
      state.loading = false;
      state.current.forecast = payload;
    },
    [getForecastApi.rejected.toString()]: (state:State, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getCurrentByGeoLocation.pending.toString()]: (state:State) => {
      state.loading = true;
      state.error = '';
    },
    [getCurrentByGeoLocation.fulfilled.toString()]: (state:State, { payload }) => {
      state.loading = false;
      state.current.location = payload;
    },
    [getCurrentByGeoLocation.rejected.toString()]: (state:State, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { handleFavorite, changeCurrent } = weatherSlice.actions;

export default weatherSlice.reducer;
