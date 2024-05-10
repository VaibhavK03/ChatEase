import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useConverstaion from "../../zustand/useConversation";
import useGetConversation from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConverstaion();
  const {conversations} = useGetConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return;
    if(search.length<3){
      return toast.error('search term must be at least 3 characters long')
    }
    
    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));
    if(conversation){
      setSelectedConversation(conversation);
      setSearch('');
    }else toast.error("No such user found!")
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Search..."
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          <FaSearch className="text-white cursor-pointer" />
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
