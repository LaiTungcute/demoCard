import React from 'react';
import './style.css';
import logo from '../img/TTVHIT-01.png';

const Main =React.forwardRef((props, ref) => {
  return (
    <div className='card' ref={ref}>
      <img className='the' src={logo} alt="bug"/>
      <img className='avt' src={`${props.avt}`} alt="bug" />
      <h1 className='name'>{props.name}</h1>
      <h1 className='age'>{props.class_name}</h1>
      <img className='maQR' src={`${props.qrCode}`} alt="bug" />
    </div>
  )
})

export default Main;