import { myBookItem } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface WriteMemoInitialState {
  writeMemoModal: boolean;
  memoBook: myBookItem;
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
    openWriteMemoModal: (state) => {
      state.writeMemoModal = true;
    },
    closeWriteMemoModal: (state) => {
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

export const {
  openWriteMemoModal,
  closeWriteMemoModal,
  setMemoBook,
  setMemoId,
} = WriteMemoSlice.actions;

export default WriteMemoSlice.reducer;
