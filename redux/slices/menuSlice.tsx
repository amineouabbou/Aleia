import { createSlice } from "@reduxjs/toolkit";

export interface MenuState {
  opened: boolean;
}

const initialState: MenuState = {
  opened: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleOpen: (state) => {
      state.opened = !state.opened;
      console.log("hitted");
    },
  },
});

export const { toggleOpen } = menuSlice.actions;

export default menuSlice.reducer;
