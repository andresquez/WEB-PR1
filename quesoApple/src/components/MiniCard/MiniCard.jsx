import './MiniCard.css'
import React from 'react'
import PropTypes from 'prop-types'

function MiniCard({
  image, title, text, colorClass,
}) {
  return (
    <div className="ContainerMC">
      <img src={image} alt="MiniCard" />
      <h1 className={`prodName ${colorClass}`}>{title}</h1>
      <h2 className={`prodSub ${colorClass}`}>{text}</h2>
      <div className="options">
        <h3 className="learnMore">Learn more &gt;</h3>
        <h3 className="buy">Buy &gt;</h3>
      </div>
    </div>
  )
}

MiniCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  colorClass: PropTypes.string.isRequired,
}

export default MiniCard
