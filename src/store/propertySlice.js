import { createSlice } from "@reduxjs/toolkit";


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
