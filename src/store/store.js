import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'; // Make sure the import path is correct
import  propertyReducer from './propertySlice'; // Make sure the import path is correct

const store = configureStore({
    reducer: {
        auth: authReducer,
        property: propertyReducer  
    },
});

export default store;
