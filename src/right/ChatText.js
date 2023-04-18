import React, { useState, useEffect } from 'react';
import './Chat.css';
import human from './human.jpg'
import dog from './dog.jpg'

export default function ChatText(props) {
    const [imageUrl, setImageUrl] = useState('');
    const [responsetext, setResponsetext] = useState('')


    useEffect(() => {

        let sounds = ['woof', 'bark', 'ruff', 'arf', 'bow wow', 'yap', 'yip'];
        let sound_count = Math.floor(Math.random() * 30) + 3; // choose a random integer from 1 to 30
        let returnstring = '';
        let probability_sum = 0;
        let log_sum = 0;
        let log_base = 1.5;

        for (let i = 0; i < sound_count; i++) {
            let probability = Math.pow(log_base, i);
            probability_sum += probability;
            let rand_num = Math.random() * probability_sum;

            for (let j = 0; j < sounds.length; j++) {
                let log_probability = Math.pow(log_base, j);
                log_sum += log_probability;

                if (log_sum >= rand_num) {
                    returnstring += sounds[j] + ' ';
                    break;
                }
            }
        }
        setResponsetext(returnstring)

        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => setImageUrl(data.message));
    }, []);

    return (
        <div className="ChatText">
            <div className='chatmessage'>
                <div className='imageContainer'>
                    <img className="ImageID" src={human} alt='human icon'></img>
                </div>
                <p className='text'>{props.text}</p>
            </div>
            <div className='chatmessage'>
                <div className='imageContainer'>
                    <img className="ImageID" src={dog} alt='dog icon'></img>
                </div>
                <div className='text-wrapper'>
                    <img className="dogimage" src={imageUrl ? imageUrl : './dog.jpg'} alt='random dog'></img>
                    <p className='text'>{responsetext}</p>
                </div>
            </div>
        </div>
    );
}
