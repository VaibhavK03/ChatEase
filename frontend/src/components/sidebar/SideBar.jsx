import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'
import useConverstaion from '../../zustand/useConversation'

const SideBar = () => {
  const {selectedConversation, setSelectedConversation} = useConverstaion();
  return (
    <div className={`border-r border-slate-500 p-4 flex flex-col w-[400px] sm:w-[370px] ${selectedConversation ? 'hidden sm:flex' : 'flex'}`}>
        <SearchInput/>
        <div className='divider divider-primary mt-2 mb-0'></div>
        <Conversations/>
        <div className='divider divider-primary mt-2 mb-0'></div>
        <LogoutButton />
    </div>
  )
}

export default SideBar