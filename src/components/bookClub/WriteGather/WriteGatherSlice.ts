import { myBookItem } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

export interface WriteGatherInitialState {
  writeGatherModal: boolean;
  clubBook: myBookItem;
  gatherId: string;
}

const initialState: WriteGatherInitialState = {
  writeGatherModal: false,
  clubBook: {
    cover: "",
    title: "",
  },
  gatherId: "",
};

export const WriteGatherSlice = createSlice({
  name: "writeGather",
  initialState,
  reducers: {
    openWriteGatherModal: (state) => {
      state.writeGatherModal = true;
    },
    closeWriteGatherModal: (state) => {
      state.writeGatherModal = false;
    },
    setGatherClubBook: (state, action) => {
      state.clubBook = action.payload;
    },
    setGatherId: (state, action) => {
      state.gatherId = action.payload;
    },
  },
});

export const {
  openWriteGatherModal,
  closeWriteGatherModal,
  setGatherClubBook,
  setGatherId,
} = WriteGatherSlice.actions;

export default WriteGatherSlice.reducer;
