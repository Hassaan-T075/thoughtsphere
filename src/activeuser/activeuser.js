import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: '',
    email: '',
    token: '',
    socials: [],
};

const userSlice = createSlice({
    name: "user",
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
            action.payload.forEach(element => {
                state.socials.push(element)
            });
          },
    },
});

export const { updateUsername, updateEmail, updateToken, updateSocials } = userSlice.actions;

export default userSlice.reducer;