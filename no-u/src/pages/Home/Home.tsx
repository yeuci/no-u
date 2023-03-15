import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import "./styles.css";

type homeProps = {};

const Home: React.FC<homeProps> = () => {
  const [gameCode, setGameCode] = useState("");

  return (
    <div className="home-main">
      <div className="home-mid">
        <div className="home-mid--top">NO-U</div>
        <div className="home-mid--bottom">
          <div className="home-buttons">
            <button>Solo</button>
            <button>Duo</button>
          </div>
          <input
            type="text"
            value={gameCode}
            onChange={(e) => setGameCode(e.target.value)}
            placeholder="Enter game code.."
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
