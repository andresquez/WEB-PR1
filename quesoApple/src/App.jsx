import React from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Card from './components/Card/Card'
import MiniCard from './components/MiniCard/MiniCard'

function App() {
  return (
    <div className="App">
      <NavBar className="topNavBar" />
      <div className="Deal">
        Get $200-$630 in credit toward iPhone 14 or iPhone 14 Pro when you trade in iPhone 11 or higher.
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
      <div className="CardsGrid">
        <MiniCard
          className="tradeIn"
          image="https://www.apple.com/v/home/az/images/promos/iphone-tradein/iphone_tradein_promo__d5au3rkw5kuq_medium_2x.jpg"
          title="Trade In"
          text="Upgrade and save. It's that easy."
          colorClass="black"
        />
        <MiniCard
          className="WWDC"
          image="https://www.apple.com/v/home/az/images/promos/wwdc23-announce/promo_wwdc23__b68ptht3mro2_medium_2x.jpg"
          title="WWDC23"
          text="Apple Worldwide Developers Conference. Join us online June 5-9."
          colorClass="white"
        />
        <MiniCard
          className="iPad"
          image="https://www.apple.com/v/home/az/images/promos/ipad/promo_ipad__fioegapg12qi_medium_2x.jpg"
          title="iPad"
          text="Lovable. Drawable. Magical."
          colorClass="black"
        />
        <MiniCard
          className="MacBookPro"
          image="https://www.apple.com/v/home/az/images/promos/macbook-pro-14-and-16/promo_mbp__ek7p477bkp6q_medium_2x.jpg"
          title="MacBook Pro"
          text="Supercharged by M2 Pro and M2 Max"
          colorClass="black"
        />
        <MiniCard
          className="HomePod"
          image="https://www.apple.com/v/home/az/images/promos/homepod/promo_homepod__f7jnolq94m2y_medium_2x.jpg"
          title="HomePod"
          text="Profound Sound"
          colorClass="black"
        />
        <MiniCard
          className="AppleCard"
          image="https://www.apple.com/v/home/az/images/promos/apple-card/tile__cauwwcyyn9hy_medium_2x.jpg"
          title="Card"
          text="Get up to 3% Daily Cash."
          colorClass="black"
        />
      </div>
    </div>
  )
}

export default App
