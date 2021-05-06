import React, { useState } from "react";
import AddPlayerForm from "./addPlayerForm";
import Player from "./Player";

const compare_score = (player_a, player_b) => {
  return player_a.score - player_b.score;
};
const compare_name = (player_a, player_b) => {
  return player_a.name.localeCompare(player_b.name);
};

const Scoreboard = () => {
  const initial = [
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ];
  const [players, setPlayers] = useState(initial);

  const [sort_by, set_sort_by] = useState("score");

  const players_sorted = [...players].sort(
    sort_by === "name" ? compare_name : compare_score
  );

  const change_sorting = (event) => {
    set_sort_by(event.target.value);
  };

  const incrementScore = (id) => {
    const new_players_array = players.map((player) => {
      if (player.id === id) {
        return {
          ...player,
          score: player.score + 1,
        };
      } else {
        return player;
      }
    });
    setPlayers(new_players_array);
  };

  const addPlayer = (name) => {
    if (name && name.match(/[a-z]/i)) {
      setPlayers([
        ...players,
        {
          id: Math.random(),
          name,
          score: 0,
        },
      ]);
    }
  };
  const resetScores = () => {
    const new_players_array = players.map((player) => ({
      // but first copying over the player object's data
      ...player,
      // and then overriding the score property to be incremented
      score: 0,
    }));
    setPlayers(new_players_array);
  };
  const randomizeScores = () => {
    const new_players_array = players.map((player) => ({
      // but first copying over the player object's data
      ...player,
      // and then overriding the score property to be incremented
      score: Math.floor(Math.random() * 101),
    }));

    setPlayers(new_players_array);
  };

  return (
    <div>
      <div>
        <label htmlFor="sort">Sort List </label>
        <select onChange={change_sorting} id="sort" value={sort_by}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
      </div>
      <br />
      <button onClick={resetScores}>Reset</button>{" "}
      <button onClick={randomizeScores}>Randomize</button>
      {players_sorted.map((player) => {
        return (
          <Player
            key={player.id}
            id={player.id}
            name={player.name}
            score={player.score}
            incrementScore={incrementScore}
          />
        );
      })}
      <AddPlayerForm addPlayer={addPlayer} />
    </div>
  );
};

export default Scoreboard;
