import React from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Card from './components/Card/Card'
import MiniCard from './components/MiniCard/MiniCard'
import miniCardData from './store/miniCardData'
import cardData from './store/cardData'
import Footer from './components/Footer/Footer'

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
      <div className="FooterA">
        <div className="ConditionsText">
          <p>
            1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device.
            Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in-store and online trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse or limit quantity of any trade-in transaction for any reason. More details are available from Apple’s trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply.
            <br />
            To access and use all the features of Apple Card, you must add Apple Card to Wallet on an iPhone or iPad with the latest version of iOS or iPadOS. Update to the latest version by going to Settings &gt; General &gt; Software Update. Tap Download and Install.
            <br />
            Available for qualifying applicants in the United States.
            <br />
            Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.
            <br />
            Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218.
            <br />
            A subscription is required for Apple TV+.
            <br />
            Major League Baseball trademarks and copyrights are used with permission of MLB Advanced Media, L.P. All rights reserved.
          </p>
        </div>
        <hr className="hr-divider" />
        <div className="FooterLinks">
          <Footer />
        </div>
        <div className="End">
          <p className="FooterInfo1">More ways to shop: Find an Apple Store or other retailer near you. Or call 1-800-MY-APPLE.</p>
          <hr className="hr-divider" />
          <div className="FooterInfo2">
            <li>Copyright © 2023 Apple Inc. All rights reserved.</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Sales and Refunds</li>
            <li>Legal</li>
            <li>Site Map</li>
            <li>United States</li>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
