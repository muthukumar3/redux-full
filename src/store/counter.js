import { createSlice } from '@reduxjs/toolkit';

const initialState = { count : 1, toggle : true };
const counterSlice = createSlice({
    name : 'counters',
    initialState,
    reducers : { 
        increament(state) {
            state.count += 1;
        },
        decreament(state) {
            state.count--;
        },
        increase(state, action) {
            state.count = state.count * action.payload;
        },
        toggle(state) {
            state.toggle = !state.toggle;
        },
        reset(state) {
            state.count = 1;
        }
    }
});

export default counterSlice.reducer;
export const CounterActions = counterSlice.actions;