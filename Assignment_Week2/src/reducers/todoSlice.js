import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deleteAllTodos: (state, action) => {
      state.todos = [];
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    setCheckedTrue: (state, action) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      state.todos[index].checked = true;
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    setCheckedFalse: (state, action) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      state.todos[index].checked = false;
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deleteChecked: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.checked === false);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    editTodo: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[index] = action.payload;
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export const {
  addTodo,
  deleteAllTodos,
  deleteTodo,
  setCheckedTrue,
  setCheckedFalse,
  deleteChecked,
  editTodo,
} = todoSlice.actions;

export const getTodos = (state) => state.todos.todos;

export default todoSlice.reducer;
