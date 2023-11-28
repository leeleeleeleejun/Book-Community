import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/common/Layout";
import HomePage from "@/pages/HomePage";
import SignUpPage from "@/pages/SignUpPage";
import TimerPage from "@/pages/TimerPage";
import MemoDetailPage from "@/pages/MemoDetailPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/timer"} element={<TimerPage />} />
          <Route path={"/a"} element={<MemoDetailPage />} />
        </Route>
        <Route path={"/signup"} element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
