import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter';
import AuthSlice from './authentication';

const store = configureStore({
    reducer : {
        counters : counterSlice,
        auth : AuthSlice
    }
});
 
export default store;