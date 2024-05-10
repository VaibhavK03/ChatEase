import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const SideBar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col w-[400px]'>
        <SearchInput/>
        <div className='divider divider-primary mt-2 mb-0'></div>
        <Conversations/>
        <div className='divider divider-primary mt-2 mb-0'></div>
        <LogoutButton />
    </div>
  )
}

export default SideBar