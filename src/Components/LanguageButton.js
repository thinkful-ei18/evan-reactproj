import React from 'react';

export default function LanguageButton (props) {
  return (
    <button className='language-selector-button' key={props.index}>
      {props.title}
    </button>
  )
}