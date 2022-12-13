const ChatInput = ({ message, setMessage, setMessages, messages, socket}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("message", message);
    const newMessages = {
      body: message,
      from: "Me",
    };
    localStorage.setItem("messages", JSON.stringify([...messages, newMessages]));
    setMessages([...messages, newMessages]);
    setMessage("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-zinc-800 p-5 lg:p-10 w-full md:w-3/4 lg:w-1/2 xl:w-5/6 md:rounded-b"
    >
      <input
        type="text"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        className="border-1 border-zinc-500 p-2 text-black w-full rounded"
      />
    </form>
  );
}

export default ChatInput;
