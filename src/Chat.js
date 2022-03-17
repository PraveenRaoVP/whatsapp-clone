import React from 'react'
import './Chat.css';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { AttachFile, InsertEmoticon, MicOutlined, MoreVert, SearchOutlined } from '@mui/icons-material';

function Chat() {
  return (
    <div className='chat'>
        <div className='chat__header'>
            <Avatar />
            <div className='chat__headerInfo'>
                <h3>Chat name</h3>
                <p>Last seen at </p>
            </div>
            <div className='chat__headerRight'>
                <IconButton>
                    <SearchOutlined />
                </IconButton>
                <IconButton>
                    <AttachFile />
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>
            </div>
        </div>
        <div className='chat__body'>

            <p className='chat__message'>
                <span className='chat__name'>Bro 1</span>
                <p className="actual__message">This is a message</p>
                <span className='chat__time'>{new Date().toUTCString()}</span>    
            </p>
            <p className='chat__message chat__receiver'>
                <span className='chat__name'>Bro 2</span>
                <p className="actual__message">This is another message</p>
                <span className='chat__time'>{new Date().toUTCString()}</span>    
            </p>
            <p className='chat__message'>
                <span className='chat__name'>Bro 2</span>
                <p className="actual__message">This is another message</p>
                <span className='chat__time'>{new Date().toUTCString()}</span>    
            </p>
        </div> 

        <div className='chat__footer'>
            <InsertEmoticon /> 
            <form>
                <input placeholder='Type a message' type='text' />
                <button type="submit">Send a message</button>
            </form>
            <MicOutlined fontSize="large" />
        </div>
    </div>
  )
}

export default Chat