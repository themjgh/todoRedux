import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    list: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id != action.payload);
    },
    toggleTodo: (state, action) => {
      state.list = state.list.map((todo) => {
        return todo.id === action.payload
          ? {
              ...todo,
              done: !todo.done,
            }
          : todo;
      });
    },
    editTodo: (state, action) => {
      state.list = state.list.map((todo) => {
        return todo.id === action.payload.id
          ? {
              ...todo,
              text: action.payload.text,
            }
          : todo;
      });
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
