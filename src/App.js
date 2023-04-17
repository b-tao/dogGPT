import './index.css';
import InputBox from './InputBox';
import Chat from './Chat';
import { useState } from 'react';

function App() {
  const [chatMessages, setChatMessages] = useState([]);

  const handleEnterKeyPress = (message) => {
    setChatMessages([...chatMessages, message]);
  }

  return (
    <div className="container">
      <div className="leftside">
        <p>left</p>
      </div>
      <div className="rightside">
        <Chat chatMessages={chatMessages} />
        <InputBox onEnterKeyPress={handleEnterKeyPress} />
      </div>
    </div>
  );
}

export default App;
