import { createSlice } from "@reduxjs/toolkit";

const initialState = { visible: false, bodyProps: null };

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal(state, action) {
      state.visible = true;
      state.bodyProps = action.payload.bodyProps || null;
    },
    hideModal(state) {
      state.visible = false;
      state.bodyProps = null;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice;
