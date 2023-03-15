import express from "express";
const app = express();
const port = 8080;
const cors = require("cors");
const io = require("socket.io");

app.use(express.json());
app.use(cors());

const SOLO_SERVER_ROOMS = {};
const DUO_SERVER_ROOMS = {};

// {
//     leader,
//     gameType,
//     players,
//     waiting,
// }

app.get("/", (req, res) => {
  res.send("NO-U");
});

io.on("connection", (socket) => {
  socket.on("login", ({ name, room }, callback) => {});
  socket.on("disconnect", () => {});
});

app.listen(port, () => {
  console.log(`Express server listening on  port: ${port}`);
});
