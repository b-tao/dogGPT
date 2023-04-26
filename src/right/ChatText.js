import React, { useState, useEffect } from 'react';
import './Chat.css';
import human from './human.jpg';
import dog from './dog.jpg';

export default function ChatText(props) {
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

    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => setImageUrl(data.message));
  }, []);

  return (
    <div className="ChatText">
      <div className="chatmessage">
        <div className="imageContainer">
          <img className="ImageID" src={human} alt="human icon" />
        </div>
        <p className="text">{props.text}</p>
      </div>
      <div className="chatresponse">
        <div className="imageContainer">
          <img className="ImageID" src={dog} alt="dog icon" />
        </div>
        <div className="text-wrapper">
          <img className="dogimage" src={imageUrl ? imageUrl : './dog.jpg'} alt="random dog" />
          <TypewriterText text={responseText} />
        </div>
      </div>
    </div>
  );
}

function TypewriterText(props) {
  const [text, setText] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      if (text.length < props.text.length) {
        setText(props.text.slice(0, text.length + 1));
      }
    }, 70);

    return () => clearInterval(timer);
  }, [props.text, text]);

  return (
    <div className="typewriter">
      <p className="text">{text}</p>
    </div>
  );
}
