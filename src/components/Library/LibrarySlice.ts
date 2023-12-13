import { createSlice } from "@reduxjs/toolkit";
import { BookListThemeObjType } from "@/types";

export interface EditUserInitialState {
  theme: BookListThemeObjType | null;
}

const initialState: EditUserInitialState = {
  theme: null,
};

export const LibrarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = LibrarySlice.actions;

export default LibrarySlice.reducer;
