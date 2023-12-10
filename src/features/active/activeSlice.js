import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: '',
    email: '',
    token: '',
    socials: [],
    followings: 0,
    followers: 0,
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
        updateFollowings: (state, action) => {
            state.followings = action.payload
        },
        updateFollowers: (state, action) => {
            state.followers = action.payload
        }
    },
});

export const { updateUsername, updateEmail, updateToken, updateSocials, updateFollowings, updateFollowers } = activeSlice.actions;

export default activeSlice.reducer;