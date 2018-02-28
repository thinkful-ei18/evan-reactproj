import React from 'react';
import LanguageButton from './LanguageButton';
import './LanguageSelector.css';

export default function LanguageSelector (props) {
  const inputbuttonArray = ['English','German','Spanish'];
  const inputbuttons = inputbuttonArray.map((name,index) => {
    return <LanguageButton title={name} key={index}/>
  })
  const outputbuttons = inputbuttonArray.map((name,index) => {
    return <LanguageButton title={name} key={index}/>
  })
  return (
    <div className='language-selector-container'>
      <div className = 'language-selector-group-input language-selector-group'>
        {inputbuttons}
      </div>
      <div className = 'language-selector-group-output language-selector-group'>
      {outputbuttons}
      </div>
    </div>
  )
}