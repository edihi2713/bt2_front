import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState :{
        userEmail:''
    },
    reducers: {
        login: (state, action) => {
            state.userEmail = action.payload.userEmail;
        }
    }
});

export const { login } = userSlice.actions;

export default userSlice.reducer;

