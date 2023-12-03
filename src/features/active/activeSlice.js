import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: '',
    email: '',
    token: '',
    socials: [],
};

const activeSlice = createSlice({
    name: "active",
    initialState,
    reducers: {
        updateUsername: (state, action) => {
            state.username = action.payload
        },
        updateEmail: (state, action) => {
            state.email = action.payload
        },
        updateToken: (state, action) => {
            state.token = action.payload
        },
        updateSocials: (state, action) => {
            state.socials.splice(0, state.socials.length)
            if (action.payload.length > 0) {
                action.payload.forEach(element => {
                    state.socials.push(element)
                });
            }
        },
    },
});

export const { updateUsername, updateEmail, updateToken, updateSocials } = activeSlice.actions;

export default activeSlice.reducer;