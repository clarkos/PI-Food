import React from 'react'
import './loader.css'
import loader from '../../assets/loader.gif'

const Loader = () => {
  return (
    <div>
      <h1>Please, wait while recipes is loaded</h1>
      <div>
        <img src={loader} alt='Loading...' />
      </div>
    </div>
  )
}

export default Loader