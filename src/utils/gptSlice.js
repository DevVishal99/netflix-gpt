import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearchClick: false,
  },
  reducers: {
    setGptSearchClick: (state, action) => {
      state.gptSearchClick = !state.gptSearchClick;
    },
  },
});

export const { setGptSearchClick } = gptSlice.actions;
export default gptSlice.reducer;
