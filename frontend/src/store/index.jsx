import {configureStore} from '@reduxjs/toolkit';
import { userSlice } from './slices/getSlice';

const store = configureStore({
    reducer:{
        users : userSlice.reducer,      
    }
})
export default store;   