import React from 'react'
import './loader.css'
import loader from '../../assets/loader.gif'

const Loader = () => {
  return (
    <div className='ff__loader'>
    <div className='ff__loader-container'>
      <p>Please, wait while recipes is loaded</p>
      <div className='ff__loader-img'>
        <img src={loader} alt='Loading...' />
      </div>
    </div>
    </div>
  )
}

export default Loader