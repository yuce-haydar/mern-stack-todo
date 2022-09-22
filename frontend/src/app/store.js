import { configureStore} from '@reduxjs/toolkit'
import authSlice from '../features/auth/authSlice';
import counterReducerSlice from '../features/counter/counterSlice';




export const store=configureStore({
    reducer:{
            auth:authSlice
    }
});//adina store dedik 