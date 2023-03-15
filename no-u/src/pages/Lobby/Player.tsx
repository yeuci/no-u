"use client";

import React from "react";

type PlayerProps = {
  leader: boolean;
};

const Player: React.FC<PlayerProps> = ({ leader }) => {
  return (
    <div
      className="player-main"
      style={{
        color: "#fff",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {leader && (
        <img
          alt="Leader"
          style={{ display: "block", position: "absolute", top: "-25%" }}
          src="./images/crown.png"
        />
      )}
      <h3>NAME</h3>
      <img
        style={{ width: "50px" }}
        src={`./images/${Math.floor(Math.random() * 5) + 1}.png`}
      />
    </div>
  );
};
export default Player;
