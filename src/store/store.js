import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'; // Make sure the import path is correct
import  propertyReducer from './propertySlice'; // Make sure the import path is correct

const store = configureStore({
    reducer: {
        auth: authReducer,
<<<<<<< HEAD
        property: propertyReducer, 
=======
        property: propertyReducer  
>>>>>>> 999982b0ab1795af8479e69f0fe7c53b4d5c4fea
    },
});

export default store;
