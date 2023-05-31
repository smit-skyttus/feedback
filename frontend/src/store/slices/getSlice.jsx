import {createSlice } from '@reduxjs/toolkit';
import getUsersList from '../actions';

const initialState = {
    usersList:[],
}

export const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUsersList.fulfilled, (state, action) => {
        state.usersList = action.payload;
    });
  },
  reducers: {}
})

export default userSlice.reducer;