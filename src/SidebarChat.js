import React from 'react'
import './SidebarChat.css';
import Avatar from '@mui/material/Avatar';

function SidebarChat() {
  return (
    <div className='sidebarChat'>
        <Avatar />
        <div className='sidebarChat__info'>
            <h2>Room name</h2>
            <p>Info</p>
        </div>
    </div>
  )
}

export default SidebarChat