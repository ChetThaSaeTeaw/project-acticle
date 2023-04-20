import { createSlice , current } from "@reduxjs/toolkit";

const initialState = {
    articles : []
};

const articleSlice = createSlice({
    name : "Article",
    initialState,
    reducers : {
        addArticle : ( state , action ) => {
            state.articles  = action.payload;
            console.log(current(state));
        }
    }
});

export const { addArticle } = articleSlice.actions;
export default articleSlice.reducer;