import io from "socket.io-client";
import { useState, useEffect, React } from "react";
import ChatFeed from "./ChatFeed";
import ChatInput from "./ChatInput";
import TitleChat from "./TitleChat";

let socket;

function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    let data = localStorage.getItem("messages");

    if (data) {
      setMessages(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    const fetchToApi =async () => await fetch("/api/chat");
    fetchToApi().catch(e => console.error(e))
    socket = io();

    const receiveMessage = (message) => {
      setMessages([...messages, message]);
    };
    socket.on("message", receiveMessage);

    return () => {
      socket.off("message", receiveMessage);
    };
  }, [messages]);

  return (
    <div className="h-screen w-100 bg-zinc-700 text-white flex flex-col items-center justify-center">
      <TitleChat setMessages={setMessages} />
      <ChatFeed messages={messages} />
      <ChatInput
        message={message}
        setMessage={setMessage}
        setMessages={setMessages}
        messages={messages}
        socket={socket}
      />
    </div>
  );
}

export default Chat;
