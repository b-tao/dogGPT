import './Chat.css';
import ChatText from './ChatText';
import { useEffect } from 'react';

export default function Chat({ chatMessages, setChats, chatnum }) {
  useEffect(() => {
    console.log('chatMessages updated', chatMessages)
  }, [chatMessages]);
  useEffect(() => {
    console.log('chatid updated', chatnum)
  }, [chatnum]);

  //variable that looks through chatMessages[chatnum] and finds the index of the chat with the id of chatnum
  var correctIndex = chatMessages.findIndex((chat) => chat.id === chatnum)
  
  return (
    <div className="chat-wrapper">
      {chatMessages && chatMessages[correctIndex] && chatMessages[correctIndex].message && chatMessages[correctIndex].message.map((message, index) => (
        <ChatText key={index} text={message} setChats={setChats} index={index} allchat={chatMessages} chatnum={chatnum} />
      ))}
    </div>
  );
}
