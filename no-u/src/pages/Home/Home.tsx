import React, { Dispatch, SetStateAction, useState } from "react";
// import { useHistory } from "react-router-dom";
import User from "../../types/User";
import "./styles.css";

type homeProps = {
  user: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const Home: React.FC<homeProps> = ({ user, setOpen }) => {
  const [gameCode, setGameCode] = useState("");

  const openSettings = () => setOpen((p: boolean) => !p);

  const userObject: User = JSON.parse(user);

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
      <button className="change-profile" onClick={openSettings}>
        <img
          style={{ height: "50px" }}
          src={`./images/${userObject.image}.png`}
          alt="Profile"
        />
      </button>
    </div>
  );
};
export default Home;
