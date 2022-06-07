import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState :{
        userEmail:'',
        token: '',
        selectedChurchId: '',
    },
    reducers: {
        login: (state, action) => {
            state.userEmail = action.payload.userEmail;
            state.token = action.payload.token;
        },
        setSelectedChurch: (state, action) => {
            state.selectedChurchId = action.payload.selectedChurchId;
        }
    }
});

export const { login, setSelectedChurch } = userSlice.actions;

export default userSlice.reducer;

