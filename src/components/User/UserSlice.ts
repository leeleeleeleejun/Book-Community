import { createSlice } from "@reduxjs/toolkit";
import { userInfo } from "@/types";

export interface EditUserInitialState {
  editUserModal: boolean;
  userInfo: userInfo | null;
}

const initialState: EditUserInitialState = {
  editUserModal: false,
  userInfo: null,
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    openModal: (state) => {
      state.editUserModal = true;
    },
    closeModal: (state) => {
      state.editUserModal = false;
    },
    setUser: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { openModal, closeModal, setUser } = UserSlice.actions;

export default UserSlice.reducer;
