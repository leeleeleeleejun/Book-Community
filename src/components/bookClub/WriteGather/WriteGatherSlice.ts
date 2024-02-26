import { myBookItem } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

export interface WriteGatherInitialState {
  writeGatherModal: boolean;
  targetBook: myBookItem;
  gatherId: string;
}

const initialState: WriteGatherInitialState = {
  writeGatherModal: false,
  targetBook: {
    cover: "",
    title: "",
  },
  gatherId: "",
};

export const WriteGatherSlice = createSlice({
  name: "writeMemo",
  initialState,
  reducers: {
    openWriteGatherModal: (state) => {
      state.writeGatherModal = true;
    },
    closeWriteGatherModal: (state) => {
      state.writeGatherModal = false;
    },
    setMemoBook: (state, action) => {
      state.targetBook = action.payload;
    },
    setGatherId: (state, action) => {
      state.gatherId = action.payload;
    },
  },
});

export const {
  openWriteGatherModal,
  closeWriteGatherModal,
  setMemoBook,
  setGatherId,
} = WriteGatherSlice.actions;

export default WriteGatherSlice.reducer;
