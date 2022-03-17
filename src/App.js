import './App.css';
import SideBar from './SideBar';
import Chat from './Chat';

function App() {
  return (
    <div className="app">
      <div className='app__body'>
        {/*Sidebar*/}
        <SideBar />
        {/*Chat */}
        <Chat />
    </div>
    </div>
  );
}

export default App;
