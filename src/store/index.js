import { configureStore } from "@reduxjs/toolkit";

import modalSlice from "./modal-slice";

const store = configureStore({
  reducer: { modal: modalSlice.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
