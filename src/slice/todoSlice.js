import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    table_list: []
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
      addTodo: (state, action)=>{
        console.log(action.payload);
        let newTodo = {
            id:Math.random().toString(36).substr(2, 9),
            key:Math.random().toString(36).substr(2, 9),
            description: action.payload.Description,
            category: action.payload.Category,
            content: action.payload.Content,
        }
        state.table_list.push(newTodo);
      },

      deleteTodo: (state, action)=>{
        console.log("sss");
        const newdata = state.table_list.filter(item => item.id !== action.payload);
        console.log("newdata",newdata)
        state.table_list = newdata;
      },

      deleteAllSelected: (state, action)=>{
        console.log("sss",action.payload);
        const newarr = state.table_list.filter(item => !action.payload.includes(item.id));
        state.table_list = newarr;    
      },

    },
  })
  
  // Action creators are generated for each case reducer function
  export const {addTodo, deleteTodo,deleteAllSelected

} = todoSlice.actions

  export const selectTodoList = (state) => state.Todo;
  
  export default todoSlice.reducer