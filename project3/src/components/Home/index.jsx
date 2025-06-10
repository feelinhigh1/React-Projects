import dices from "../../assets/dices_1.png";
import { Link } from "react-router-dom";
import React from "react";
import "./style.css";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="left-content">
          <div className="image-container">
            <img src={dices} alt="dices" className="dices-image" />
          </div>
        </div>
        <div className="right-content">
          <h1>DICE GAME</h1>
          <div className="play-now">
            <Link to="/playNow">
              <button>Play Now</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
