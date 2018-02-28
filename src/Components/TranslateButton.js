import React from 'react';
import './TranslateButton.css';

export default function TranslateButton (props) {
  return (
    <button onClick={() => props.onClick()} className='translate-button'>Translate</button>
  )
}