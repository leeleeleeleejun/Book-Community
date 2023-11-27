import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/common/Layout";
import Home from "@/pages/Home";
import SignUP from "@/pages/SignUp";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={"/"} element={<Home />} />
        </Route>
        <Route path={"/signup"} element={<SignUP />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
