import React, { useState, useEffect } from "react";
import Player from "./Player";
import User from "../../types/User";

import "./styles.css";
import toast from "react-hot-toast";

type LobbyProps = {};

const Lobby: React.FC<LobbyProps> = () => {
  const copyInvite = () =>
    toast.success("Copied invite link", {
      duration: 4000,
      position: "top-center",

      // Styling
      style: {},
      className: "",

      // Custom Icon
      icon: "👏",

      // Change colors of success/error/loading icon
      iconTheme: {
        primary: "#000",
        secondary: "#fff",
      },

      // Aria
      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },
    });

  return (
    <div className="lobby-main">
      <div className="lobby-top">UNO</div>
      <div className="lobby-mid">
        <div className="lobby-players">
          <Player leader={true} />
          <Player leader={false} />
          <Player leader={false} />
          <Player leader={false} />
        </div>
        <div className="lobby-buttons">
          <button>Start</button>
          <button>Ready</button>
        </div>
      </div>
      <div className="lobby-bottom">
        <input placeholder={""} />
        <button onClick={copyInvite}>Invite</button>
      </div>
      <div className="player-count">
        <h3>4/4 Players</h3>
      </div>
    </div>
  );
};
export default Lobby;
