const ChatFeed = ({ messages }) => {
  return (
    <ul className="h-80 overflow-y-auto bg-zinc-900 p-5 lg:p-10 w-full md:w-3/4 lg:w-1/2 xl:w-5/6 xl:h-4/5">
      {messages.map((message, index) => (
        <li
          key={index}
          className={`my-2 p-2 lg:text-2xl table rounded-md ${
            message.from === "Me" ? "bg-sky-700 ml-auto" : "bg-black"
          }`}
        >
          <p className="text-lg">{message.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default ChatFeed;
