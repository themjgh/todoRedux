import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./slices/ToodoSlice";

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;
