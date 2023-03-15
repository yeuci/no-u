import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import { CreateAccount, Home, Lobby } from "./pages";
import "./index.css";

function App() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      {(!user || open) && <CreateAccount setUser={setUser} setOpen={setOpen} />}
      {user && (
        <>
          {/* ROUTES */}
          <Home user={user} setOpen={setOpen} />
          {/* <Lobby /> */}
          <Toaster />
        </>
      )}
    </div>
  );
}

export default App;
