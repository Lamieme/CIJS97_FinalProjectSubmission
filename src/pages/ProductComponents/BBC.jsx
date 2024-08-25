import React from 'react'
import './BBC.css'


function BBC({name,icon}) {
  return (
    <div className='block'>
        <img src={icon} alt="" />
        <p>{name}</p>
    </div>
  )
}

export default BBC