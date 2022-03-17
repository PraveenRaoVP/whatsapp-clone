import React from 'react'
import './SideBar.css';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert'; 
import Avatar from '@mui/material/Avatar';
import { SearchOutlined } from '@mui/icons-material';
import SidebarChat from './SidebarChat';

function SideBar() {
  return (
    <div className='sidebar'>
        <div className='sidebar__header'>
            <Avatar src='https://media-exp1.licdn.com/dms/image/C4D03AQFYQMmfN5KV3w/profile-displayphoto-shrink_400_400/0/1631709244496?e=1652918400&v=beta&t=GhJQYdeWTNRTHhz2DU2Yp4mK2LfJ9D9Qi5iyXZPNUm0' sx={{ width: 60, height: 60 }}/>
            <div className='sidebar__headerRight'>
                <IconButton>
                    <DonutLargeIcon  fontSize="large"/>
                </IconButton>
                <IconButton>
                    <ChatIcon fontSize="large" />
                </IconButton>
                <IconButton>
                   <MoreVertIcon fontSize='large'/>
                </IconButton>
            </div>
        </div>
        <div className='sidebar__search'>
            <div className='sidebar__searchContainer'>
                <SearchOutlined />
                <input placeholder='Search or start new chat' type='text' />
            </div>
        </div>

        <div className='sidebar__chats'>
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
        </div>

    </div>
  )
}

export default SideBar