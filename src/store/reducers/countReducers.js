import { createSlice } from "@reduxjs/toolkit";

const countInitialState = { number: 0 };

const countSlice = createSlice({
  name: "count",
  initialState: countInitialState,
  reducers: {
    countChange(state, action) {
      state.number = action.payload;
    },
  },
});

const countActions = countSlice.actions;
const countReducer = countSlice.reducer;

export { countActions, countReducer };
