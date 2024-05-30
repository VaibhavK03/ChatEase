import useGetConversations from "../../hooks/useGetConversations";
import ConvoSkeleton from "../skeleton/ConvoSkeleton";
import Conversation from "./Conversation";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  console.log("conversations", conversations);
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, index) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          lastIndex={index === conversations.length - 1}
        />
      ))}

      {loading ? (
        [...Array(6)].map((_, index) => <ConvoSkeleton key={index} />)
      ) : null}
    </div>
  );
};
export default Conversations;

