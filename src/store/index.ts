import { configureStore } from "@reduxjs/toolkit";
import WriteMemoSlice from "@/components/memo/WriteMemo/WriteMemoSlice";
import EditUserSlice from "@/components/EditUser/EditUserSlice";

export const store = configureStore({
  reducer: {
    WriteMemoSlice,
    EditUserSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
