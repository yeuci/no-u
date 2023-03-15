"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const https_1 = require("https");
const fs_1 = __importDefault(require("fs"));
const cors_1 = __importDefault(require("cors"));
const socket_io_1 = require("socket.io");
const CREDENTIALS = {
    key: fs_1.default.readFileSync(`${__dirname}/../ssl_cert/server.pem`),
    cert: fs_1.default.readFileSync(`${__dirname}/../ssl_cert/server.crt`)
};
const OPTIONS = {
    cors: { origin: '*' }
};
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const httpsServer = (0, https_1.createServer)(CREDENTIALS, app);
const io = new socket_io_1.Server(httpsServer, OPTIONS);
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
    console.log(`Express server listening on https port: ${SECURE_PORT}`);
});
//# sourceMappingURL=index.js.map