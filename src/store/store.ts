import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import weatherReducer from './weatherSlice';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

export const store = createStore(weatherReducer, composedEnhancer);
