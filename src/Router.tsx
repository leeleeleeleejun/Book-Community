import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/common/Layout";
import HomePage from "@/pages/HomePage";
import SignUpPage from "@/pages/SignUpPage";
import TimerPage from "@/pages/TimerPage";
import MemoDetailPage from "@/pages/MemoDetailPage";
import UserMemoPage from "@/pages/UserMemoPage";
import { CLIENT_PATH } from "@/constants/path";
import LibraryPage from "@/pages/LibraryPage";
import BookClubPage from "@/pages/BookClubPage";
import GatherPage from "./pages/GatherPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={CLIENT_PATH.HOME} element={<HomePage />} />
          <Route path={CLIENT_PATH.BOOK_CLUB} element={<BookClubPage />} />
          <Route path={CLIENT_PATH.BOOK_CLUB_GATHER} element={<GatherPage />} />
          <Route path={CLIENT_PATH.TIMER} element={<TimerPage />} />
          <Route path={CLIENT_PATH.MEMO} element={<MemoDetailPage />} />
          <Route path={CLIENT_PATH.USER_MEMO} element={<UserMemoPage />} />
          <Route path={CLIENT_PATH.LIBRARY} element={<LibraryPage />} />
        </Route>
        <Route path={CLIENT_PATH.SIGNUP} element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
