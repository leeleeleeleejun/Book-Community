import { createSlice } from "@reduxjs/toolkit";

export interface SearchBookInitialState {
  searchBookModal: boolean;
}

const initialState: SearchBookInitialState = {
  searchBookModal: false,
};

export const SearchBookSlice = createSlice({
  name: "searchBook",
  initialState,
  reducers: {
    openModal: (state) => {
      state.searchBookModal = true;
    },
    closeModal: (state) => {
      state.searchBookModal = false;
    },
  },
});

export const { openModal, closeModal } = SearchBookSlice.actions;

export default SearchBookSlice.reducer;
