import { createSlice } from "@reduxjs/toolkit";

<<<<<<< HEAD
const initialState = null; // Define a more structured initial state if needed

const propertySlice = createSlice({
    name: "property",
    initialState,
    reducers: {
        addProperty: (state, action) => {
            return action.payload; // Validate the payload format as needed
        },
    },
});

export default propertySlice.reducer;
export const { addProperty } = propertySlice.actions;
=======

const initialState = null; // You can also define a more structured initial state if needed

const proertySlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        addProperty: (state, action) => {
            return action.payload; // Make sure to validate the payload format
        },
     
    },
});

export default proertySlice.reducer;
export const { addProperty } = proertySlice.actions;
>>>>>>> 999982b0ab1795af8479e69f0fe7c53b4d5c4fea
