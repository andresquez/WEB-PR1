import React from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Card from './components/Card/Card'
import MiniCard from './components/MiniCard/MiniCard'
import miniCardData from './store/miniCardData'
import cardData from './store/cardData'

function App() {
  return (
    <div className="App">
      <NavBar className="topNavBar" />
      <div className="Deal">
        Get $200-$630 in credit toward iPhone 14 or iPhone 14 Pro when you trade in iPhone 11 or higher.
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="ShopiPhone">Shop iPhone &gt;</a>
      </div>
      <div className="Cards">
        {cardData.map((card) => (
          <Card
            key={card.id}
            className={card.className}
            image={card.image}
            title={card.title}
            text={card.text}
            colorClass={card.colorClass}
          />
        ))}
      </div>
      <div className="CardsGrid">
        {miniCardData.map((card) => (
          <MiniCard
            key={card.id}
            className={card.className}
            image={card.image}
            title={card.title}
            text={card.text}
            colorClass={card.colorClass}
          />
        ))}
      </div>
      <div className="Carrousel">
        <img src="https://imgur.com/ZvgdDO8.png" alt="Carrousel" />
      </div>
      

    </div>
  )
}

export default App
