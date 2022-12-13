import Modal from "./Modal";

const TitleChat = ({ setMessages }) => {
  return (
    <div className="flex p-2 xl:p-5 w-full md:w-3/4 lg:w-1/2 xl:w-5/6 text-center bg-zinc-800 md:rounded-t">
      <h1 className="text-2xl font-bold flex-1">Chat React</h1>
      <Modal
        content={{ title: "Do you want delete this conversation" }}
        action={() => {
          localStorage.setItem("messages", JSON.stringify([]))
          setMessages([]);
        }}
      />
    </div>
  );
};

export default TitleChat;
