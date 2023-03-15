import express from "express";
import { createServer } from 'https';
import fs from 'fs';
import cors from 'cors';
import { Server } from 'socket.io';

const CREDENTIALS = {
  key: fs.readFileSync(`${__dirname}/../ssl_cert/server.pem`),
  cert: fs.readFileSync(`${__dirname}/../ssl_cert/server.crt`)
};

const OPTIONS = {
  cors: { origin: '*'}
};

const app = express();
app.use(express.json());
app.use(cors());

const httpsServer = createServer(CREDENTIALS, app);
const io = new Server(httpsServer, OPTIONS);

const SECURE_PORT = 8443;

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
  socket.on("login", ({ name, room }, callback) => {
    console.log(`user: {name} has logged into room: {room}`);
  });
  socket.on("disconnect", () => {
    console.log('a user has disconnected');
  });
});

app.listen(SECURE_PORT, () => {
  console.log(`Express server listening on https port: ${SECURE_PORT}`)
});