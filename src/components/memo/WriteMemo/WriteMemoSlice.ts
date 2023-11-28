import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  open: boolean;
}

const initialState: CounterState = {
  open: false,
};

export const WriteMemoSlice = createSlice({
  name: "openWriteMemoModal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.open = true;
    },
    closeModal: (state) => {
      state.open = false;
    },
  },
});

export const { openModal, closeModal } = WriteMemoSlice.actions;

export default WriteMemoSlice.reducer;
