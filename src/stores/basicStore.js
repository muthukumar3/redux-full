import { createSlice } from '@reduxjs/toolkit';

const initialState = { name : 'Initial Value' };
const basicSlice = createSlice({
    name : 'basic',
    initialState,
    reducers : {
        first (state) {
            state.name = 'New Value'
        }
    }
});

export default basicSlice.reducer;
