import React, { useState } from 'react';
import './InputBox.css';
import enter_button from './Enter_button.jpg'

export default function InputBox(props) {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      props.onEnterKeyPress(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="input-wrapper">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="input-field"
        placeholder='Send a Message.'
      />
      <button className="enter-button" onClick={() => {
        props.onEnterKeyPress(inputValue);
        setInputValue('');
      }}>
        <img className="enterimage" src={enter_button} alt="enter icon" />
      </button>
    </div>
  );
};
