import { createSlice } from "@reduxjs/toolkit";

export interface SearchBookInitialState {
  searchBookModalOpen: boolean;
}

const initialState: SearchBookInitialState = {
  searchBookModalOpen: false,
};

export const SearchBookSlice = createSlice({
  name: "searchBook",
  initialState,
  reducers: {
    openModal: (state) => {
      state.searchBookModalOpen = true;
    },
    closeModal: (state) => {
      state.searchBookModalOpen = false;
    },
  },
});

export const { openModal, closeModal } = SearchBookSlice.actions;

export default SearchBookSlice.reducer;
