import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Posts from "../pages/Posts";

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/posts"} element={<Posts />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
