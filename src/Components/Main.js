import React from 'react'
import rightSide from '../imgs/bp-app.png'
const Main = () => {
  return (
    <main>
      <div className="main-left">
        <h1>DISCOVER POCKET BANK</h1>
        <p>"The mobile application to check your accounts wherever you are!" </p>
        <div className='main-infos'>
          <strong>Want to manage your account from your cell phone?</strong>
          <span>Banque Populaire offers you an innovative solution: "Pocket Bank",
            a mobile banking solution that will bring your bank even closer to you. </span>
          <a target='_blanck' href='https://particulier.groupebcp.com/fr/produits/banque-%C3%A0-distance/pocket-bank'>Learn More</a>
        </div>
      </div>
      <div className="main-pic-cont">
        <img src={rightSide} alt="" className="main-pic" />
        <div className="shadow"></div>
      </div>
    </main>
  )
}

export default Main
