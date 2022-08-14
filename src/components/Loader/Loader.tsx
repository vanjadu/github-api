import React from 'react'
import './loader.sass'
import { Audio } from 'react-loader-spinner'

const Loader = (): JSX.Element => {
  return (
    <div className='loader'>
      <Audio height='80' width='80' color='#111111' />
    </div>
  )
}

export default Loader
