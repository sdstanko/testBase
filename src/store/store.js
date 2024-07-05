import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counter.js';

export const createReduxStore = (initialState = {}) => {
    return configureStore({
        reducer: {
            counter: counterReducer,
        },
        preloadedState: initialState,
    });
};
