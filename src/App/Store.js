import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/Slice";
import filterReducer from "../features/FilterSlice";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    filter: filterReducer,
  },
});

export default store;
