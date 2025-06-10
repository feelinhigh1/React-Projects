import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import PlayNow from "./components/PlayNow";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playNow" element={<PlayNow />} />
      </Routes>
    </>
  );
}
