import { createSlice } from "@reduxjs/toolkit";

export interface WriteMemoInitialState {
  WriteMemoModal: boolean;
}

const initialState: WriteMemoInitialState = {
  WriteMemoModal: false,
};

export const WriteMemoSlice = createSlice({
  name: "writeMemo",
  initialState,
  reducers: {
    openModal: (state) => {
      state.WriteMemoModal = true;
    },
    closeModal: (state) => {
      state.WriteMemoModal = false;
    },
  },
});

export const { openModal, closeModal } = WriteMemoSlice.actions;

export default WriteMemoSlice.reducer;
