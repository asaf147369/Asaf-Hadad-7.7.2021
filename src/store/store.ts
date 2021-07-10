import { configureStore, createStore, getDefaultMiddleware, applyMiddleware  } from '@reduxjs/toolkit';
import weatherReducer from './weatherSlice';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';



const middleware:any = [...getDefaultMiddleware()];

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

export const store = createStore(weatherReducer, composedEnhancer);
