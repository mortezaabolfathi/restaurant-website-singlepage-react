import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "Per",
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = settingsSlice.actions;
export default settingsSlice.reducer;
