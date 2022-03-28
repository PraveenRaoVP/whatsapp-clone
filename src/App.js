import './App.css';
import SideBar from './SideBar';
import Chat from './Chat';
import { useState, useEffect } from 'react';
import Pusher from 'pusher-js';
import axios from './axios';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync').then(response => {
      setMessages(response.data)
    })
  }, []);

  useEffect(() => {
      const pusher = new Pusher('4d9de3ba41c27bc1e1f1', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      alert(JSON.stringify(data));
      setMessages([...messages, data]);
    });


    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    };

  }, [messages]);
  
  console.log(messages);
  return (
    <div className="app">
      <div className='app__body'>
        {/*Sidebar*/}
        <SideBar />
        {/*Chat */}
        <Chat messages={messages}/>
    </div>
    </div>
  );
}

export default App;
