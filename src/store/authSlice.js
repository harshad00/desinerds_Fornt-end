import { createSlice } from "@reduxjs/toolkit";

const initialState = null; // You can also define a more structured initial state if needed

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        addUser: (state, action) => {
            return action.payload; // Make sure to validate the payload format
        },
        removeUser: () => {
            return null;
        },
    },
});

export default authSlice.reducer;
export const { addUser, removeUser } = authSlice.actions;
