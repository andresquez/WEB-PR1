import './MiniCard.css'
import React from 'react'
import PropTypes from 'prop-types'

function MiniCard({
  image, title, text, colorClass,
}) {
  const textColorClass = colorClass === 'black' ? 'black' : 'white'

  return (
    <div className="ContainerMC">
      <img src={image} alt="MiniCard" />
      <h1 className={`prodNameMC ${textColorClass}`}>{title}</h1>
      <h2 className={`prodSubMC ${textColorClass}`}>{text}</h2>
      <div className="optionsMC">
        <a href="https://www.example.com" className="learnMoreMC">Learn more &gt;</a>
        <a href="https://www.example.com" className="buyMC">Buy &gt;</a>
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
