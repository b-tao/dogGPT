import './NewChat.css';
import dog from '../right/dog.jpg';
import ChatSelect from './ChatSelect';

export default function NewChat({ chats, setChats, newChat, setemptyPage, setid, deleteChat, id, emptyPage }) {
    return (
        <div className='overall'>
            <div className='NewChatSection'>
                <div className='NewChatButton' onClick={newChat}>
                    <p className="NewChat"> + </p>
                    <p className='text-container-add'>New Chat</p>
                    </div>
                    </div>
            <div className='current chats'>
                <ChatSelect input={chats} setChats={setChats} setemptyPage={setemptyPage} setid={setid} deleteChat={deleteChat} id={id} emptyPage={emptyPage}/>
            </div>
            <div className='extra_icons'>
                <div className="Contact_wrapper">
                    <div className="image-Container">
                        <img className="left-dog-ImageID" src={dog} alt="dog icon" />
                    </div>
                    <div className='text-container'>
                        <div className='extra_text'>&ensp;Contact Us&ensp;</div>
                    </div>
                </div>
            </div>

        </div>
    )

}