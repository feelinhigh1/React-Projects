import { useState } from "react";
import "./style.css";

export default function Navbar({ setSelectedCategory }) {
  const categories = ["All", "Breakfast", "Lunch", "Dinner"];
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    if (searchText.trim() !== "") {
      console.log("Searching for:", searchText);
    }
  };

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="top-section">
          <div className="logo-name">
            F<span className="o-letter">oo</span>dy Z
            <span className="o-letter">o</span>ne
          </div>
          <div className="search-input-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search Food......"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
            />
          </div>
        </div>

        <div className="bottom-section">
          <div className="bottom-section-categories">
            {categories.map((item, key) => (
              <button
                key={key}
                className="categories-btn"
                onClick={() => setSelectedCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
