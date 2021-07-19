import { configureStore } from '@reduxjs/toolkit'
import signInUpFormReducer from '../features/signInUpForm/signInUpFormSlice.js'
import authReducer from '../features/auth/authSlice.js'

export default configureStore({
    reducer: {
        signInUpForm: signInUpFormReducer,
        auth: authReducer,
    },
})