import { createSlice, configureStore } from '@reduxjs/toolkit';
import basicSlice from './basicStore';

const initialState = { counter : 0 };

const counterSlice = createSlice({
    name : "counter",
    initialState,
    reducers : {
        increment (state) {
            state.counter++
        },
        increase (state, action) {
            state.counter = state.counter + action.payload
        }
    }
});
const counterSlices = counterSlice.reducer;
const stores = configureStore({
    reducer : {
        counterSlices, 
        basicSlice
    }
});

export default stores; 
export const counterActions = counterSlice.actions;