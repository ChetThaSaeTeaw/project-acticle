import { configureStore } from "@reduxjs/toolkit";
import articleSlice from './Reducer';

export default configureStore ({
    reducer : {
        articles : articleSlice
    }
});