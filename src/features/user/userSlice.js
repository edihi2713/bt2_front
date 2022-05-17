import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState :{
        userEmail:'',
        token: ''
    },
    reducers: {
        login: (state, action) => {
            state.userEmail = action.payload.userEmail;
            state.token = action.payload.token;
        }
    }
});

export const { login } = userSlice.actions;

export default userSlice.reducer;

