import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types
import { searchOptionInterface } from "@/types/types.ts";

const initialState: searchOptionInterface = {
    searchTerm: '',
    category: ''
};

const searchOptionReducer = createSlice({
    name: 'searchOption',
    initialState,
    reducers: {
        changeCategory(state, action: PayloadAction<string>) {
            state.category = action.payload;
        },
        changeSearchTerm(state, action: PayloadAction<string>) {
            state.searchTerm = action.payload;
        }
    }
});

// Export the action creators
export const { changeCategory, changeSearchTerm } = searchOptionReducer.actions;

// Export the reducer to be added to the store
export default searchOptionReducer.reducer;
