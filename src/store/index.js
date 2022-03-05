import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialValue = { counter : 0, toggle : true };
const counterSlice = createSlice({
    name : 'counter',
    initialValue,
    reducer : {
        increament(state) {
            state.counter = state.counter++;
        },
        decreament(state) {
            state.counter = state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.amount;
        },
        toggle(state) {
            state.toggle = !state.toggle;
        }
    },
    extraReducers: (builder) => {
        builder
            .addDefaultCase((state) => {
                state.counter = state.counter
            })
    }
});

const store = configureStore({
    reducer : {
        counter: counterSlice.reducer,
    },
})

export const counterActions = counterSlice.actions;

export default store;