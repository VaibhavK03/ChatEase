import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { FaArrowCircleLeft } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import useConverstaion from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConverstaion();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  const handleSelect = () => {
    setSelectedConversation(null);
  };

  return (
    <div className={`${selectedConversation ? 'flex' : 'hidden sm:flex'} flex w-[400px] sm:min-w-[350px]  lg:min-w-[550px] flex-col `}>
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="flex items-center bg-slate-600 px-4 py-2 mb-2">
            <div onClick={handleSelect} className="flex justify-center items-center pr-3 cursor-pointer">
              <FaArrowCircleLeft size={25} />
            </div>
            <img className="w-10 h-10 mr-2" src={selectedConversation.profilePic} alt="" />
            <span className="text-gray-200 font-bold">{selectedConversation.fullName}</span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex flex-1 items-center justify-center h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome!! {authUser.fullName}</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

export default MessageContainer;
