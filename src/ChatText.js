import './Chat.css';

export default function ChatText(props) {
  return (
    <div className="ChatText">
        <img src="src/human-icon.jpg"></img>
      <p>{props.text}</p>
    </div>
  );
}
