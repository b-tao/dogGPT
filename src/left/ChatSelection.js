import './ChatSelect.css'


export default function ChatSelection({ key, message, allchat, onDelete, setid, index, setemptyPage }) {
    const handleDelete = () => {
        onDelete()
    }
    const handleClick = (event) => {
        if (event.target.className !== 'selection-delete') {
            console.log('clicked ', index)
            setid(index)
            setemptyPage(false)
        }
    };

    return (
        <div>
            <div className="selection" onClick={handleClick}>
                <p className='chat-selector-text'> {message}</p>
                <p className='selection-delete' onClick={handleDelete}>X</p>
            </div>
        </div>
    )
}