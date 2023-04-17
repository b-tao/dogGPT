import './Chat.css';
import ChatText from './ChatText';

export default function Chat(props) {
  return (
    <div className="chat-wrapper">
      {props.chatMessages.map((message, index) => (
        <ChatText key={index} text={message} />
      ))}
    </div>
  );
}
