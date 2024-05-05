import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
      <div className="chat-image avatar">
        <div className='w-10 rounded-full'>
          <img src="https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg" alt="avatar" />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500`}>
        Hi! What is up?
      </div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:42</div>
    </div>
  )
}

export default Message