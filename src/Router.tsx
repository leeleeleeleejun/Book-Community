import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/common/Layout";
import HomePage from "@/pages/HomePage";
import SignUpPage from "@/pages/SignUpPage";
import TimerPage from "@/pages/TimerPage";
import MemoDetailPage from "@/pages/MemoDetailPage";
import MyMemoPage from "@/pages/MyMemoPage";
import { CLIENT_PATH } from "@/constants/path";
import LibraryPage from "./pages/LibraryPage";
import AuthRoute from "@/AuthRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={CLIENT_PATH.HOME} element={<HomePage />} />
          <Route path={CLIENT_PATH.TIMER} element={<TimerPage />} />
          <Route path={CLIENT_PATH.MEMO} element={<MemoDetailPage />} />
          <Route element={<AuthRoute />}>
            <Route path={CLIENT_PATH.MY_MEMO} element={<MyMemoPage />} />
            <Route path={CLIENT_PATH.LIBRARY} element={<LibraryPage />} />
          </Route>
        </Route>
        <Route path={CLIENT_PATH.SIGNUP} element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
