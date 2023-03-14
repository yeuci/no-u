import React, { useState } from "react";
import { CreateAccount } from "./pages";

function App() {
  const [newUser, setNewUser] = useState(localStorage.getItem("user"));

  return (
    <div className="App">
      {!newUser && <CreateAccount setUser={setNewUser} />}
      <h1>UNO</h1>
    </div>
  );
}

export default App;
