import { createSlice } from "@reduxjs/toolkit";

const initialState = []; // Define an empty array if you expect a list of properties

const propertySlice = createSlice({
    name: "property",
    initialState,
    reducers: {
        addProperty: (state, action) => {
            return action.payload; // Ensure payload is in the correct format
        },
    },
});

export default propertySlice.reducer;
export const { addProperty } = propertySlice.actions;
