import React from "react";
import "./style.css";
import Shoe from "../../assets/images/shoe.png";

export default function Home() {
  return (
    <div className="home-page-container">
      <div className="content-left">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES,
          YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.
        </p>

        <button className="shop-now-button btn">Shop Now</button>
        <button className="category-button btn">Category</button>

        {/* <span>Also available on</span> */}
      </div>
      <div className="content-right">
        <div className="image-container">
          <img src={Shoe} alt="Shoe image" className="shoe-img" />
        </div>
      </div>
    </div>
  );
}
