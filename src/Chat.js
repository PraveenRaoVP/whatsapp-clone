import React from 'react'
import './Chat.css';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import { AttachFile, InsertEmoticon, MicOutlined, MoreVert, SearchOutlined } from '@mui/icons-material';
import axios from './axios';


function Chat({ messages }) {
    const [input,setInput] = useState("");
    
   
    const sendMessage = async (e) => {
        e.preventDefault();
        await axios.post('/messages/new', {
            message: input,
            name: "Praveen",
            timestamp: "Now",
            received: true
        });

        setInput('');
    };
  
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
            {messages.map((message) => {
                <p className={`chat__message ${message.received && "chat__receiver"}`}>
                    <span className='chat__name'>{message.name}</span>
                    <p classname="actual__message">{message.message}</p>
                    <span className='chat__time'>{message.timestamp}</span>
                </p>
            })}
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
                <input value={input} onChange={e => setInput(e.target.value)} placeholder='Type a message' type='text' />
                <button onClick={sendMessage} type="submit">Send a message</button>
            </form>
            <MicOutlined fontSize="large" />
        </div>
    </div>
  )
}

export default Chat