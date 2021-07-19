import {createSlice} from "@reduxjs/toolkit"

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        value: {
            username: null
        }
    },
    reducers: {
        setUsername: (state, action) => {
            state.value.username = action.payload
        }
    }
});

export const {setUsername} = authSlice.actions;

export const selectAuth = state => state.auth.value;

export default authSlice.reducer