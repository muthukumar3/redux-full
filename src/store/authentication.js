import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated : JSON.parse(localStorage.getItem('isAuthenticated')) || false,
    user : localStorage.getItem('user') || []
}

const AuthSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        login (state) {
            state.isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated'))
        },
        logout (state) {
            state.isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated'))
        }
    }
});

export default AuthSlice.reducer;
export const AuthActions = AuthSlice.actions;