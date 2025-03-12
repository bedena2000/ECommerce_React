import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types

const initialState = 0;

const detailsSice = createSlice({
    name: 'details',
    initialState,
    reducers: {
        addToDetails: (state, action: PayloadAction<number>) => {
            return action.payload;
        }
    }
});

// Export the action creators
export const { addToDetails } = detailsSice.actions;

// Export the reducer to be added to the store
export default detailsSice.reducer;