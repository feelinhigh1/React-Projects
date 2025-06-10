// src/components/MainPage.jsx

import React from "react";
import "./style.css";
import boiledEggs from "../../assets/BoiledEggs.png";
import burger from "../../assets/Burger.png";
import cake from "../../assets/Cake.png";
import grilledChicken from "../../assets/GrilledChicken.png";
import panCake from "../../assets/PanCake.png";
import ramen from "../../assets/Ramen.png";
import backgroundImage from "../../assets/background.png";

export default function MainPage({ selectedCategory }) {
  const foodItems = [
    {
      name: "Boiled Eggs",
      description:
        "Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est.",
      price: "10.00",
      image: boiledEggs,
      alt: "Boiled Eggs",
      category: "Breakfast",
    },
    {
      name: "RAMEN",
      description:
        "Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est.",
      price: "25.00",
      image: ramen,
      alt: "Ramen",
      category: "Lunch",
    },
    {
      name: "GRILLED CHICKEN",
      description:
        "Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est.",
      price: "45.00",
      image: grilledChicken,
      alt: "Grilled Chicken",
      category: "Dinner",
    },
    {
      name: "CAKE",
      description:
        "Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est.",
      price: "18.00",
      image: cake,
      alt: "Cake",
      category: "Breakfast",
    },
    {
      name: "BURGER",
      description:
        "Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est.",
      price: "23.00",
      image: burger,
      alt: "Burger",
      category: "Lunch",
    },
    {
      name: "PANCAKE",
      description:
        "Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est.",
      price: "25.00",
      image: panCake,
      alt: "PanCake",
      category: "Breakfast",
    },
  ];

  const filteredItems =
    selectedCategory === "All"
      ? foodItems
      : foodItems.filter((item) => item.category === selectedCategory);

  return (
    <>
      <div
        className="background-wrapper"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="overlay"></div>

        <div className="menu">
          <div className="card-grid">
            {filteredItems.map((foodItem, key) => (
              <div className="menu-item-card" key={key}>
                <div className="image-container">
                  <img
                    className="menu-item-image"
                    src={foodItem.image}
                    alt={foodItem.alt}
                  />
                </div>

                <div className="menu-item-content">
                  <div className="menu-item-name">{foodItem.name}</div>
                  <div className="menu-item-description">
                    {foodItem.description}
                  </div>
                  <div className="price-container">
                    <button className="price">${foodItem.price}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
