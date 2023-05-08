import './ChatSelect.css'
import ChatSelection from './ChatSelection'
export default function ChatSelect({ input, setChats, setemptyPage, setid, deleteChat, id, emptyPage }) {
  const handleDelete = (key) => {
    const updatedChats = input.filter((chat, index) => index !== key);
    const updatedChatsWithAdjustedIndexes = updatedChats.map((chat, index) => {
      return { id: index, message: chat.message };
    });
    setChats(updatedChatsWithAdjustedIndexes)
    setemptyPage(true)
    deleteChat()
  }
  return (
    <div>
      {input && input.map((chat, index) => (
        // console.log('chat', chat, index),
        <ChatSelection key={chat.id} message={chat.message[0][0]} allchat={input} onDelete={() => handleDelete(index)} setid={setid} index={index} setemptyPage={setemptyPage} id={id} emptyPage={emptyPage} />
      ))}
    </div>
  )
}