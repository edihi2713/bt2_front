import { createSlice } from "@reduxjs/toolkit";

export const eventsSlice = createSlice({
    name: 'events',
    initialState :{
        selectedEventId: null
    },
    reducers: {
        setSelectedEvent: (state, action) => {
            state.selectedEventId = action.payload.selectedEventId;
        }
    }
});

export const { setSelectedEvent } = eventsSlice.actions;

export default eventsSlice.reducer;

