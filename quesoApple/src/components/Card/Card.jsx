import './Card.css'
import React from 'react'
import PropTypes from 'prop-types'

function Card({
  image, title, text, colorClass,
}) {
  return (
    <div className="Container">
      <img src={image} alt="Card" />
      <h1 className={`prodName ${colorClass}`}>{title}</h1>
      <h2 className={`prodSub ${colorClass}`}>{text}</h2>
      <div className="options">
        <h3 className="learnMore">Learn more &gt;</h3>
        <h3 className="buy">Buy &gt;</h3>
      </div>
    </div>
  )
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  colorClass: PropTypes.string.isRequired,
}

export default Card
