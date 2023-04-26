import './NewChat.css';
import dog from '../right/dog.jpg';

export default function NewChat() {
    return (
        <div className='overall'>
            <div className='newChatSection'>
                <p className="NewChat"> + &ensp;&ensp;New Chat</p></div>
            <div className='current chats'></div>
            <div className='extra_icons'>
                <div className="Contact_wrapper">
                    <div className="imageContainer">
                        <img className="ImageID" src={dog} alt="dog icon" />
                    </div> 
                    <p>&ensp;Contact Us&ensp;</p>
                </div>
            </div>

        </div>
    )

}