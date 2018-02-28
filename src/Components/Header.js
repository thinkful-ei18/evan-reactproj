import React from 'react';
import BottomHeader from '../Components/BottomHeader'
import TopHeader from '../Components/TopHeader'

export default function Header(props) {
  return (
    <div className='header'>
      <TopHeader title='React-Translate'/>
      <BottomHeader/>
    </div>
  )
}