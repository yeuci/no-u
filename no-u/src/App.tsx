import React, { useState } from "react";
import { CreateAccount, Home } from "./pages";
import "./index.css";

function App() {
  const [newUser, setNewUser] = useState(localStorage.getItem("user"));

  return (
    <div className="App">
      {!newUser && <CreateAccount setUser={setNewUser} />}
      <Home />
    </div>
  );
}

export default App;
