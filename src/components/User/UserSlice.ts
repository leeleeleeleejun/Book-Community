import { createSlice } from "@reduxjs/toolkit";
import { userInfo } from "@/types";

export interface EditUserInitialState {
  editUserModalOpen: boolean;
  userInfo: userInfo | null;
}

const initialState: EditUserInitialState = {
  editUserModalOpen: false,
  userInfo: null,
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    openModal: (state) => {
      state.editUserModalOpen = true;
    },
    closeModal: (state) => {
      state.editUserModalOpen = false;
    },
    setUser: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { openModal, closeModal, setUser } = UserSlice.actions;

export default UserSlice.reducer;
