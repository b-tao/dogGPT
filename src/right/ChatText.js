import React, { useState, useEffect } from 'react';
import './Chat.css';
import human from './human.jpg';
import dog from './dog.jpg';

export default function ChatText({ key, text, setChats, index, allchat, chatnum }) {
  const [imageUrl, setImageUrl] = useState('');
  const [responseText, setResponseText] = useState('');

  useEffect(() => {
    let sounds = ['woof', 'bark', 'ruff', 'arf', 'bow wow', 'yap', 'yip'];
    let soundCount = Math.floor(Math.random() * 30) + 3; // choose a random integer from 3 to 32
    let returnString = '';
    let probabilitySum = 0;
    let logSum = 0;
    let logBase = 1.5;

    for (let i = 0; i < soundCount; i++) {
      let probability = Math.pow(logBase, i);
      probabilitySum += probability;
      let randNum = Math.random() * probabilitySum;

      for (let j = 0; j < sounds.length; j++) {
        let logProbability = Math.pow(logBase, j);
        logSum += logProbability;

        if (logSum >= randNum) {
          returnString += sounds[j] + ' ';
          break;
        }
      }
    }
    setResponseText(returnString);

    async function handleFetch() {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        setImageUrl(data.message);
    
        var addition = allchat[chatnum].message[index];
        addition = [...addition, data.message, returnString];
        var allchatmessage = [...allchat[chatnum].message.slice(0, index), addition, ...allchat[chatnum].message.slice(index + 1)];
        setChats([...allchat.slice(0, chatnum), { id: chatnum, message: allchatmessage }, ...allchat.slice(chatnum + 1)]);
        
      } catch (error) {
        console.log(error);
      }
    }
    
    handleFetch();
    


     } , []);
    // console.log('text', index, chatnum, text)

    return (
      <div className="ChatText">
        <div className="chatmessage">
          <div className="imageContainer">
            <img className="ImageID" src={human} alt="human icon" />
          </div>
          <p className="text">{text[0]}</p>
        </div>
        <div className="chatresponse">
          <div className="imageContainer">
            <img className="ImageID" src={dog} alt="dog icon" />
          </div>
          <div className="text-wrapper">
            <img className="dogimage" src={text[1] ? text[1] : './dog.jpg'} alt="random dog" />
            <p className="text">{text[2]}</p>
            {/* <TypewriterText text={responseText} /> */}
          </div>
        </div>
      </div>
    );
  }

// function TypewriterText(text) {
//   const [text, setText] = useState('');

//   useEffect(() => {
//     const timer = setInterval(() => {
//       if (text.length < text.length) {
//         setText(text.slice(0, text.length + 1));
//       }
//     }, 70);

//     return () => clearInterval(timer);
//   }, [text, text]);

//   return (
//     <div className="typewriter">
//       <p className="text">{text}</p>
//     </div>
//   );
// }
