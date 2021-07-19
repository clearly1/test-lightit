import {createSlice} from "@reduxjs/toolkit"

export const signInUpFormSlice = createSlice({
    name: 'signInUpForm',
    initialState: {
        value: {
            isOpen: false,
            isSignIn: true
        }
    },
    reducers: {
        changeSignInUpFormIsOpen: (state) => {
            state.value.isOpen = !state.value.isOpen
        },
        changeIsSignIn: (state, action) => {
            state.value.isSignIn = action.payload
        }

    }
});

export const {changeSignInUpFormIsOpen, changeIsSignIn} = signInUpFormSlice.actions;

export const selectSignInUpForm = state => state.signInUpForm.value;

export default signInUpFormSlice.reducer