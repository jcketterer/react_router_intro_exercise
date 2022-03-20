import React from 'react'
import { Link } from 'react-router-dom'

const Candy = () => {
  return (
    <div>
      <h1>Candy NOMS!</h1>
      <img
        src="https://media.giphy.com/media/oD7R709a1MgdzhMnI9/giphy-downsized-large.gif"
        alt="Candy Bro!"
      />
      <div>
        <button>
          <Link to="/">GO BACK!</Link>
        </button>
      </div>
    </div>
  )
}

export default Candy
