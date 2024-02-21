import React from 'react'
import { Link } from 'react-router-dom'

import './not-found.css'

function NotFound() {
  return (
    <div className="not-found1-container">
      <h3>OOPS! PAGE NOT FOUND</h3>
      <div className="not-found1-container1">
        <h1 className="not-found1-text1">404</h1>
      </div>
      <div className="not-found1-container2">
        <h2 className="not-found1-text2">
          WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND
        </h2>
      </div>
      <Link to="/" className="not-found1-hero-button1 buttonFilled">
        HOME
      </Link>
    </div>
  )
}

export default NotFound
