import React from 'react'
import SideBar from '../../components/sidebar/SideBar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
  return (
    <div className='flex h-[600px] sm:h-[600px] md:h-[550px] lg:h-[600px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <SideBar/>
        <MessageContainer/>
    </div>
  )
}

export default Home