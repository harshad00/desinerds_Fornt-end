import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'; // Adjust the path if needed
import propertyReducer from './propertySlice'; // Adjust the path if needed

const store = configureStore({
    reducer: {
        auth: authReducer,
        property: propertyReducer,
    },
});

export default store;
