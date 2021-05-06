import React from "react";
import "../style/player.css";
const Player = ({ name, id, score, incrementScore }) => {
  const onClickIncrement = () => {
    // call the callback prop passed down from the scoreboard
    incrementScore(id);
  };
  return (
    <ul>
      <li>
        <div className="percentage_coloring" style={{ width: score + "%" }}> </div>
        <span>{name}</span> <span>{score}</span>
        <button onClick={onClickIncrement}>Like</button>
      </li>
    </ul>
  );
};

export default Player;
