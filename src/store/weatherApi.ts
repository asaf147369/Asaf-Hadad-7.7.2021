import { createAsyncThunk } from '@reduxjs/toolkit';
import { http } from '../utils/http';
import { API_KEY } from '../utils/api_key';

import { Location } from "../interfaces/Location";

export const getLocationApi = createAsyncThunk(
  'weather/getPlaces',
  async (value:Location, { rejectWithValue }) => {
    try {
      const { data } : { data:Location } = await http(
        `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${value}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getWeatherApi = createAsyncThunk(
  'weather/getWeather',
  async (location:Location, { rejectWithValue }) => {
    try {
      const { data } : { data:Location[]} = await http(
        `https://dataservice.accuweather.com/currentconditions/v1/${location.Key}?apikey=${API_KEY}&metric=true`
      );
      return { weather: data[0], location };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getForecastApi = createAsyncThunk(
  'weather/getForecast',
  async (location:Location, { rejectWithValue }) => {
    try {
      const { data } = await http(
        `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${location.Key}?apikey=${API_KEY}&metric=true`
      );
      return data.DailyForecasts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCurrentByGeoLocation = createAsyncThunk(
  'weather/getByGeo',
  async ({ lat, lng }: {lat:number, lng:number}, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await http(
        `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${lat}%2C%20${lng}`
      );
      dispatch(getWeatherApi(data));
      dispatch(getForecastApi(data));
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
