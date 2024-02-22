import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    language: "en",
  },
  reducers: {
    selectedLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { selectedLanguage } = configSlice.actions;
export default configSlice.reducer;
