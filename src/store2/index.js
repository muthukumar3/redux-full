import { creactSlice, configureStore } from '@reduxjs/toolkit';


const initialState = { name : 'Testing' };

const basicSlice = creactSlice({
    name : 'basic',
    initialState,
    reducers : {
        first (state, action) {
            return state;
        }
    }
});

