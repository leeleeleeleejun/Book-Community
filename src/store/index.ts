import { configureStore } from "@reduxjs/toolkit";
import WriteMemoSlice from "@/components/memo/WriteMemo/WriteMemoSlice";
import UserSlice from "@/components/User/UserSlice";

export const store = configureStore({
  reducer: {
    WriteMemoSlice,
    UserSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
