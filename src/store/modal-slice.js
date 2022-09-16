import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visible: false,
  bodyProps: null,
  actions: [],
  actionHandler: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal(state, action) {
      state.visible = true;
      state.bodyProps = action.payload.bodyProps || null;
      state.actions = action.payload.actions;
    },
    hideModal(state) {
      state.visible = false;
      state.bodyProps = null;
      state.actions = null;
      state.actionHandler = null;
    },
    setActionHandler(state, action) {
      state.actionHandler = action.payload.actionHandler;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice;
