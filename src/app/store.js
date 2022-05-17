import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "../features/user/userSlice";

export default configureStore({
    reducer: {
        user: userReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
})