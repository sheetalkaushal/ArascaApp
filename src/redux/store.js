import { configureStore } from "@reduxjs/toolkit";
import Loginreducer from "./reducers/Loginreducer";
export const store = configureStore({
  reducer: {
    status: Loginreducer,
  },
});
