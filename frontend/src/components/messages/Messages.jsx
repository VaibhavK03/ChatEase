import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from "../../hooks/useGetMessages"
import MessageSkeleton from '../../components/skeleton/MessageSkeleton'

const Messages = () => {
  const {messages, loading} = useGetMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({behaviour: "smooth"});
    },100)
  },[messages])

  return (
    <div className='px-6 flex-1 overflow-auto'>
        {!loading && messages.length > 0 && 
          messages.map((message) => (
            <div key={message._id} ref={lastMessageRef} >
              <Message message={message} />
            </div>
          ))
        }
        {loading && [...Array(4)].map((_, index) => <MessageSkeleton key={index}/>)}
        {!loading && messages.length === 0 && (
          <p className='m-2 text-center text-black font-semibold'>Send a message to start a conversation</p>
        )}
    </div>
  )
}

export default Messages