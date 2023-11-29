import { createSlice } from "@reduxjs/toolkit";

export interface EditUserInitialState {
  open: boolean;
}

const initialState: EditUserInitialState = {
  open: false,
};

export const EditUserSlice = createSlice({
  name: "openEditUserModal",
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

export const { openModal, closeModal } = EditUserSlice.actions;

export default EditUserSlice.reducer;
