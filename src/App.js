import './index.css';
import InputBox from './right/InputBox';
import Chat from './right/Chat';
import { useState } from 'react';
import NewChat from './left/NewChat';
import Github from './GitHub-Mark.png';
import IntroCard from './right/IntroCard';

function App() {
  const [chatMessages, setChatMessages] = useState([]);
  const [emptyPage, setemptyPage] = useState(true);

  const handleEnterKeyPress = (message) => {
    if (message != ''){
      setemptyPage(false);
    setChatMessages([...chatMessages, message]);
  }}

  return (
    <div className="container">
      <div className="leftside">
        <NewChat />
      </div>
      <div className="rightside">
        <div className="chat-container">
          {emptyPage && <div>
            <IntroCard />
            </div>}
          <Chat chatMessages={chatMessages} />
        </div>
        <InputBox className='inputbox' onEnterKeyPress={handleEnterKeyPress} />
        <div className='des-wrapper'>
          <p className='des'>A Parody of <a href="https://openai.com/blog/chatgpt"> ChatGPT </a>and <a href="https://cat-gpt.com/">CatGPT</a> created by Brian Tao</p>
          <a href="https://github.com/b-tao/dogGPT">
            <div className='imageContainer'>
              <img src={Github} alt="Github logo" />
            </div>
          </a>

        </div>
      </div>
    </div>
  );
}

export default App;