import React from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Card from './components/Card/Card'

function App() {
  return (
    <div className="App">
      <NavBar className="topNavBar" />
      <div className="Deal">
        Get $200-$630 in credit toward iPhone 14 or iPhone 14 Pro when you trade in iPhone11 or higher.
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="ShopiPhone">Shop iPhone &gt;</a>
      </div>
      <div className="Cards">
        <Card
          className="iPhone14Pro"
          image="https://www.apple.com/v/home/az/images/heroes/iphone-14-pro/hero_iphone14pro_spring__9xo85pm6sbmm_largetall_2x.jpg"
          title="iPhone 14 Pro"
          text="Pro. Beyond."
          colorClass="black"
        />
        <Card
          className="iPhone14"
          image="https://www.apple.com/v/home/az/images/heroes/iphone-14/hero_iphone14_yellow__eun20sn4imi6_largetall_2x.jpg"
          title="iPhone 14"
          text="Wonderfull."
          colorClass="white"
        />
        <Card
          className="Watch"
          image="https://www.apple.com/v/home/az/images/heroes/apple-watch-series-8/hero_apple_watch_series_8_spring__b1y8wb7xjc9y_largetall_2x.jpg"
          title="WATCH"
          text="A healthy leap ahead."
          colorClass="black"
        />
      </div>
    </div>
  )
}

export default App
