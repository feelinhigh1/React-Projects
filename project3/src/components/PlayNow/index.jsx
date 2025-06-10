import React, { useState, useRef } from "react";
import "./style.css";
import dice1 from "../../assets/dice_1.png";
import dice2 from "../../assets/dice_2.png";
import dice3 from "../../assets/dice_3.png";
import dice4 from "../../assets/dice_4.png";
import dice5 from "../../assets/dice_5.png";
import dice6 from "../../assets/dice_6.png";

export default function PlayNow() {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [score, setScore] = useState(0);
  const [isToggled, setIsToggled] = useState(false);
  const [diceRolled, setDiceRolled] = useState(false);
  const [showError, setShowError] = useState(false);

  const diceRef = useRef(null);

  const numbers = [1, 2, 3, 4, 5, 6];
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

  const resetScore = () => {
    setScore(0);
    setSelectedNumber(null);
    setDiceRolled(false);
  };

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const rollDice = () => {
    if (selectedNumber === null) {
      setShowError(true);
      return;
    }

    setShowError(false);
    let counter = 0;
    const interval = setInterval(() => {
      const rand = Math.floor(Math.random() * 6) + 1;
      diceRef.current.src = diceImages[rand - 1];
      counter++;
      if (counter >= 10) {
        clearInterval(interval);
        setDiceRolled(true);
        setSelectedNumber(null);

        // Final value
        const finalValue = rand;
        if (selectedNumber === finalValue) {
          setScore((prev) => prev + finalValue);
        } else {
          setScore((prev) => prev - 2);
        }
      }
    }, 100);
  };

  return (
    <div className="play-now-container">
      <div className="top-content">
        <div className="top-content-left">
          <div className="score-count">{score}</div>
          <div className="total-score-text">Total Score</div>
        </div>
        <div className="top-content-right">
          {showError && (
            <div className="top-content-right-error">
              You have not selected any number
            </div>
          )}

          <div className="number-selection">
            {numbers.map((num, key) => (
              <button
                key={key}
                className={`select-number-button ${
                  selectedNumber === num && !diceRolled ? "selected" : ""
                }`}
                onClick={() => {
                  setSelectedNumber(num);
                  setDiceRolled(false);
                }}
              >
                {num}
              </button>
            ))}
          </div>
          <div className="select-number-text">Select Number</div>
        </div>
      </div>

      <div className="bottom-content">
        <div className="dice-content">
          <div className="dice-image-container">
            <img
              src={dice1}
              alt="dice"
              className="dice-image"
              ref={diceRef}
              onClick={rollDice}
            />
          </div>
          <div className="dice-text">Click on dice to roll</div>
        </div>

        <div className="buttons-content">
          <button className="reset-score btn" onClick={resetScore}>
            Reset Score
          </button>
          <button className="show-rules btn" onClick={handleToggle}>
            {isToggled ? "Hide Rules" : "Show Rules"}
          </button>
        </div>

        <div className={`rule-content ${isToggled ? "" : "display-none"}`}>
          <h3>How to play dice game</h3>
          <p>Select any number</p>
          <p>Click on dice image</p>
          <p>
            After clicking the dice, if your selected number matches the dice
            number, you get that many points.
          </p>
          <p>If it's wrong, 2 points will be deducted.</p>
        </div>
      </div>
    </div>
  );
}
