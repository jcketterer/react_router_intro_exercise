import React from 'react'
import { Link } from 'react-router-dom'

const Soda = () => {
  return (
    <div>
      <h1>Get jacked up on some mountain dew!</h1>
      <img
        src="https://media.giphy.com/media/l4KhIS7A1HswgSm7C/giphy.gif"
        alt="Chip Dew Bro!"
      />
      <div>
        <h2>
          <Link to="/">GO BACK!</Link>
        </h2>
      </div>
    </div>
  )
}

export default Soda
