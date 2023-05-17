import { createSlice } from "@reduxjs/toolkit";

const varifySlice = createSlice({
    name: "saveCourse",
    initialState: { courseCode: "", year: "" },
    reducers: {
      saveCourseCode(state,action) {
        state.courseCode = action.payload;
      },
      saveYear(state,action){
        state.year = action.payload;
      }
    },
  });

export const varifyActions = varifySlice.actions;

export default varifySlice.reducer

