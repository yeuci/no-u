"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import { random, left, right } from "./icons";
import "./styles.css";

interface CreateAccountProps {
  setUser: Dispatch<SetStateAction<string | null>>;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const CreateAccount: React.FC<CreateAccountProps> = (
  props: CreateAccountProps
) => {
  const [image, setImage] = useState(0);
  const [name, setName] = useState("");

  const randomize = () =>
    setImage((prev: number) => Math.floor(Math.random() * 5) + 1);
  const changeUser = (e: React.FormEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement;
    setName(target.value);
  };
  const changeImage = (n: number) =>
    setImage((prev) => {
      if (prev + n < 0) return 5;
      if (prev + n > 5) return 0;
      return prev + n;
    });

  const saveUser = () => {
    localStorage.setItem("user", JSON.stringify({ name, image }));
    props.setOpen((p: boolean) => false);
    props.setUser((p: string | null) => {
      return JSON.stringify({ name, image });
    });
  };

  return (
    <div className="create-account-main">
      <div className="create-account-mid">
        <button onClick={randomize} className="random">
          {random}
        </button>
        <div className="create-account-character">
          <button onClick={() => changeImage(-1)}>{left}</button>
          <img
            className="character-img"
            alt="Account"
            src={`./images/${image}.png`}
          />
          <button onClick={() => changeImage(1)}>{right}</button>
        </div>
        <input
          value={name}
          onChange={changeUser}
          placeholder="Enter your name"
        ></input>
        <button onClick={saveUser}>Go</button>
      </div>
    </div>
  );
};

export default CreateAccount;
