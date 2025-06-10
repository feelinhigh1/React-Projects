import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Location from "./containers/Location";
import Menu from "./containers/Menu";
// import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/location" element={<Location />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
