import React from 'react';
import InputField from './InputField';
import './InputContainer.css';

export default function InputContainer (props) {
  return (
    <div className='input-field'>
      <InputField onChange={(e) => props.onChange(e)}/>
      <InputField/>
    </div>
  )
}