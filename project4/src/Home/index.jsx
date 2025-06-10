import { useState } from "react";
import Navbar from "../components/Navbar";
import MainPage from "../containers/MainPage";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <>
      <Navbar setSelectedCategory={setSelectedCategory} />
      <MainPage selectedCategory={selectedCategory} />
    </>
  );
}
