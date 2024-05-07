import React from 'react'
import snorlaxError from '../../assets/page-not-found.png'
import './error.css'
const Error = () => {
  return (
    <div className='back'>
    <img src={snorlaxError} alt="Error 404" className='imgError'/>
    </div>
  )
}

export default Error