// src/store/studentsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [
    {
      name: "Forum Bhatt",
      cohort: "AY 2024-25",
      course1: "CBSE 9 Science",
      course2: "CBSE 9 Math",
      dateJoined: "17. Nov. 2024",
      lastLogin: "17. Nov. 2024 4:16 PM",
      status: "active",
    },
    // Add more students if needed
  ],
};

export const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },
  },
});

export const { addStudent } = studentsSlice.actions;
export default studentsSlice.reducer;
