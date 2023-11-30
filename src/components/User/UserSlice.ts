import { createSlice } from "@reduxjs/toolkit";
import { userInfo } from "@/types";

export interface EditUserInitialState {
  open: boolean;
  userInfo: userInfo | null;
}

const initialState: EditUserInitialState = {
  open: false,
  userInfo: null,
};

export const UserSlice = createSlice({
  name: "openEditUserModal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.open = true;
    },
    closeModal: (state) => {
      state.open = false;
    },
    setUser: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { openModal, closeModal, setUser } = UserSlice.actions;

export default UserSlice.reducer;
