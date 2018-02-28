import React from 'react';
import LanguageButton from './LanguageButton';
import './LanguageSelector.css';

export default function LanguageSelector (props) {
  const buttonArray = [{name:'English', iso:'en'}, {name:'German', iso:'de'},{name:'Spanish',iso:'es'}];

  const inputbuttons = buttonArray.map((lang,index) => {
    let isSelected = props.sourceLang === lang.iso
    return <LanguageButton onClick={(e) => props.alterSourceLang(e)} iso={lang.iso} currentSourceLang={props.sourceLang} title={lang.name} isSelected={isSelected} key={index}/>
  })

  const outputbuttons = buttonArray.map((lang,index) => {
    let isSelected = props.targetLang === lang.iso;
    return <LanguageButton title={lang.name} onClick={(e) => props.alterTargetLang(e)} iso={lang.iso} isSelected={isSelected} key={index}/>
  })

  // console.log(props);
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