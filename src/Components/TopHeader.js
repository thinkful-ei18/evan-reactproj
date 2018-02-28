import React from 'react';
import './TopHeader.css';

export default function TopHeader (props) {
  return (
    <header className='top-header'>
      <h1>{props.title}</h1>
      <p className='google-blue'>Hopefully this works for you</p>
   </header>
  )
}
