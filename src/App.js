import './index.css';
import InputBox from './right/InputBox';
import Chat from './right/Chat';
import { useContext, useState } from 'react';
import NewChat from './left/NewChat';
import Github from './GitHub-Mark.png';
import IntroCard from './right/IntroCard';

function App() {
  const [chatMessages, setChatMessages] = useState([]);
  const [emptyPage, setemptyPage] = useState(true);
  const [allchat, setallchat] = useState([]);
  const [idnum, setidnum] = useState(0) // idnum is id of the latest chat
  const [id, setid] = useState(0) // id is the current chat

  const handleEnterKeyPress = (message) => {
    setChatMessages([...chatMessages, message]);
    console.log(idnum, message)
    if (message != '') {
      if (emptyPage) {
        setemptyPage(false);

        const newmessage = [message]
        var newChatObject = { id: idnum, message: [newmessage] };
        setallchat([...allchat, newChatObject]);

      } else {
        const newmessage = [message]
        var currentmessage = allchat[id].message
        currentmessage = [...currentmessage, newmessage]
        setallchat([...allchat.slice(0, id), { id: id, message: currentmessage }, ...allchat.slice(id + 1)])
      }
    }
  }

  const newChat = () => {
    setemptyPage(true)
      setidnum(prevIdNum => {
        const newIdNum = prevIdNum + 1;
        setid(newIdNum);
        return newIdNum;
      });

  };
  console.log('id, idnum', id, idnum, allchat);
  
  const deleteChat = () => {
    setid(0)
    setidnum(idnum-1)
  }

  return (
    <div className="container">
      <div className="leftside">
        <NewChat chats={allchat} setChats={setallchat} newChat={newChat} setemptyPage={setemptyPage} setid={setid} deleteChat={deleteChat} id={id} emptyPage={emptyPage}/>
      </div>
      <div className="rightside">
        <div className="chat-container">
          {emptyPage && <div>
            <IntroCard handleEnterKeyPress={handleEnterKeyPress}/>
          </div>}
          {!emptyPage && <Chat chatMessages={allchat} setChats={setallchat} chatnum={id} /> }
        </div>
        <InputBox className='inputbox' onEnterKeyPress={handleEnterKeyPress} />
        <div className='des-wrapper'>
          <p className='des'>A Parody of <a href="https://openai.com/blog/chatgpt"target="_blank" rel="noopener noreferrer"> ChatGPT </a>and <a href="https://cat-gpt.com/"target="_blank" rel="noopener noreferrer">CatGPT</a> created by Brian Tao</p>
          <a href="https://github.com/b-tao/dogGPT" target="_blank" rel="noopener noreferrer">
            <div className='imageContainer-git'>
              <img src={Github} alt="Github logo" />
            </div>
          </a>

        </div>
      </div>
    </div>
  );
}

export default App;
