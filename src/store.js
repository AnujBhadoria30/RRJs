import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './features/apiSlice';
import categoriesApi from './features/categoriesSlice';


const store = configureStore({
    reducer: {
        api: apiReducer,
        categories:categoriesApi
    },
});

export default store;
