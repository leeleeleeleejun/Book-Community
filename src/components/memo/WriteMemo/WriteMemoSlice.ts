import { my_book_item } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

export interface WriteMemoInitialState {
  writeMemoModal: boolean;
  memoBook: my_book_item;
  memoId: string;
}

const initialState: WriteMemoInitialState = {
  writeMemoModal: false,
  memoBook: {
    cover: "",
    title: "",
  },
  memoId: "",
};

export const WriteMemoSlice = createSlice({
  name: "writeMemo",
  initialState,
  reducers: {
    openModal: (state) => {
      state.writeMemoModal = true;
    },
    closeModal: (state) => {
      state.writeMemoModal = false;
    },
    setMemoBook: (state, action) => {
      state.memoBook = action.payload;
    },
    setMemoId: (state, action) => {
      state.memoId = action.payload;
    },
  },
});

export const { openModal, closeModal, setMemoBook, setMemoId } =
  WriteMemoSlice.actions;

export default WriteMemoSlice.reducer;
