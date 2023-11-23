import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.tasks.push(action.payload);
    }, 
    deleteTodo: (state, action) => {
      console.log("state.tasks",state.tasks.filter((val) => console.log(val)));
      state.tasks = state.tasks.filter((task) => task.name !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
