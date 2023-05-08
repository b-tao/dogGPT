import './ChatSelect.css'


export default function ChatSelection({ key, message, allchat, onDelete, setid, index, setemptyPage, id, emptyPage }) {
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

    const isHighlighted = emptyPage ? false : index === id

    return (
        <div>
            <div className={`selection ${isHighlighted ? 'highlighted' : 'hover-selected'}`} onClick={handleClick}>
                <p className='chat-selector-text'> {message}</p>
               { isHighlighted&& <p className='selection-delete' onClick={handleDelete}>X</p> }
            </div>
        </div>
    )
}