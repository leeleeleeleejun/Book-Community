import { configureStore } from "@reduxjs/toolkit";
import WriteMemoSlice from "@/components/memo/WriteMemo/WriteMemoSlice";
import UserSlice from "@/components/User/UserSlice";
import SearchBookSlice from "@/components/SearchBook/SearchBookSlice";
import LibrarySlice from "@/components/Library/LibrarySlice";
import WriteGatherSlice from "@/components/bookClub/WriteGather/WriteGatherSlice";

export const store = configureStore({
  reducer: {
    WriteMemoSlice,
    WriteGatherSlice,
    UserSlice,
    SearchBookSlice,
    LibrarySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
