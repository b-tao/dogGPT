import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ChatContext from './ChatContext';
import { useState } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
function Root() {
  const [chatContext, setChatContext] = useState(null);

  return (
    <React.StrictMode>
      <ChatContext.Provider value={{chatContext, setChatContext}}>
        <App/>
      </ChatContext.Provider>
    </React.StrictMode>
  );
}

root.render(<Root />);
