import React from 'react'
import { Link } from 'react-router-dom'

const Potato = () => {
  return (
    <div>
      <h1>Potato?</h1>
      <img
        src="https://media.giphy.com/media/McCrvMCsnWKqg9aMs6/giphy.gif"
        alt="Potato Bro!"
      />
      <div>
        <button>
          <Link to="/">GO BACK!</Link>
        </button>
      </div>
    </div>
  )
}

export default Potato
