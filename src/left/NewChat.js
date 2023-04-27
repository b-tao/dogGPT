import './NewChat.css';
import dog from '../right/dog.jpg';

export default function NewChat() {
    return (
        <div className='overall'>
            <div className='NewChatSection'>
                <div className='NewChatButton'>
                <p className="NewChat"> + </p>
                <p className='text-container'>New Chat</p></div></div>
            <div className='current chats'></div>
            <div className='extra_icons'>
                <div className="Contact_wrapper">
                    <div className="imageContainer">
                        <img className="ImageID" src={dog} alt="dog icon" />
                    </div>
                    <div className='text-container'>            
                            <p className='extra_text'>&ensp;Contact Us&ensp;</p>
                    </div>
                </div>
            </div>

        </div>
    )

}