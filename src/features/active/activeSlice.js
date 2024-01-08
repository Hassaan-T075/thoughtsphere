import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: '',
    email: '',
    token: '',
    social: [],
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
        updateSocial: (state, action) => {
            state.social.splice(0, state.social.length)
            if (action.payload.length > 0) {
                action.payload.forEach(element => {
                    state.social.push(element)
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

export const { updateUsername, updateEmail, updateToken, updateSocial, updateFollowings, updateFollowers } = activeSlice.actions;

export default activeSlice.reducer;