import { Server } from "Socket.IO";

const ChatHandler = (req, res) => {
  if (!res.socket.server.io) {
    const io = new Server(res.socket.server);
    res.socket.server.io = io;
    io.on("connection", (socket) => {
      socket.on("message", (message) => {
        socket.broadcast.emit("message", {
          body: message,
          from: socket.id,
        });
      });
    });
  }
  res.end();
};

export default ChatHandler;
