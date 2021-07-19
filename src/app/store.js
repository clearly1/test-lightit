import { configureStore } from '@reduxjs/toolkit'
import signInUpFormReducer from '../features/signInUpForm/signInUpFormSlice.js'

export default configureStore({
    reducer: {
        signInUpForm: signInUpFormReducer
    },
})