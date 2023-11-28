import { configureStore } from "@reduxjs/toolkit";
import WriteMemoSlice from "@/components/memo/WriteMemo/WriteMemoSlice";

export const store = configureStore({
  reducer: {
    WriteMemoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
