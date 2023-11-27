import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/common/Layout";
import HomePage from "@/pages/HomePage";
import SignUpPage from "@/pages/SignUpPage";
import TimerPage from "@/pages/TimerPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/timer"} element={<TimerPage />} />
        </Route>
        <Route path={"/signup"} element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
